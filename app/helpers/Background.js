import { chain, flatten, isUndefined, sortBy } from 'lodash'
import { log } from './Logger'
import { getPostsCount, savePostsCount } from '../storages/PostsCountStorage'
import { fetchAllPosts } from '../fetchers/PostFetcher'

// Returns a badge text according to number of posts
export function badgeText(number) {
  number = number || 0
  if (number <= 0) { return '' }
  if (number > 10) { return '10+' }
  return `${number}`
}


function updatePostsCount(posts) {
  log('updatePostsCount - posts', posts)

  return getPostsCount().then((postsCount) => {
    let oldUnreadPostsCount = postsCount.total || 0
    let newUnreadPostsCount = oldUnreadPostsCount
    let newPostsCount = {}

    posts.forEach((post) => {
      let groupId = post.groupId
      let totalPostsCount = post.totalPostsCount

      // This is new group
      if (isUndefined(postsCount[groupId])) {
        newUnreadPostsCount += Math.min(totalPostsCount, 10)
      } else {
        let differenceBetweenValues = totalPostsCount - postsCount[groupId]

        if (differenceBetweenValues > 0) {
          newUnreadPostsCount += differenceBetweenValues
        }
      }

      newPostsCount[groupId] = totalPostsCount
    })

    newPostsCount['total'] = newUnreadPostsCount

    log('updatePostsCount - newPostsCount', newPostsCount)
    savePostsCount(newPostsCount)

    log('updatePostsCount - newUnreadPostsCount', newUnreadPostsCount)
    let hasNewUnreadPosts = !!(newUnreadPostsCount > oldUnreadPostsCount)
    return Promise.resolve({ newUnreadPostsCount, hasNewUnreadPosts })
  })
}

export function listPosts(posts) {
  log('listPosts - posts', posts)

  let result = chain(posts).map((post) => post.posts).flatten().sortBy((post) => -post.date).value()

  log('listPosts - result', result)

  return result
}

export function updatePosts() {
  return fetchAllPosts().then((posts) => {
    let promises = [
      Promise.resolve(listPosts(posts)),
      updatePostsCount(posts)
    ]
    return Promise.all(promises)
  })
}
