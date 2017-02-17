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
    let totalNewPosts = postsCount.total || 0
    let newPostsCount = {}

    posts.forEach((post) => {
      let groupId = post.groupId
      let totalPostsCount = post.totalPostsCount

      // This is new group
      if (isUndefined(postsCount[groupId])) {
        if (totalPostsCount > 0) {
          totalNewPosts += 10
        }
      } else {
        let differenceBetweenValues = totalPostsCount - postsCount[groupId]

        if (differenceBetweenValues > 0) {
          totalNewPosts += differenceBetweenValues
        }
      }

      newPostsCount[groupId] = totalPostsCount
    })

    newPostsCount['total'] = totalNewPosts

    log('updatePostsCount - newPostsCount', newPostsCount)
    savePostsCount(newPostsCount)

    log('updatePostsCount - totalNewPosts', totalNewPosts)
    return Promise.resolve(totalNewPosts)
  })
}

function listPosts(posts) {
  log('listPosts - posts', posts)

  let result = chain(posts).map((post) => post.posts).flatten().sortBy((post) => -post.date).value()

  log('listPosts - result', result)

  return result
}

export function updatePosts() {
  return fetchAllPosts().then((posts) => {
    return Promise.all([
      Promise.resolve(listPosts(posts)),
      updatePostsCount(posts)
    ])
  })
}
