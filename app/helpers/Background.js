import map from 'lodash/map'
import flatten from 'lodash/flatten'
import sortBy from 'lodash/sortBy'
import isUndefined from 'lodash/isUndefined'
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
  console.group('listPosts')
  console.log('posts', posts)

  let result = sortBy(flatten(map(posts, (post) => post.posts)), (post) => -post.date);
  console.log('result', result)
  console.groupEnd()

  return result
}

export function updatePosts() {
  return fetchAllPosts().then((posts) => {
    return Promise.all([
      Promise.resolve(listPosts(posts)),
      updatePostsCount(posts)
    ]).then(([posts, newPostsCount]) => {
      log('updatePosts - posts', posts)
      log('updatePosts - newPostsCount', newPostsCount)
      return { posts, newPostsCount }
    })
  })
}
