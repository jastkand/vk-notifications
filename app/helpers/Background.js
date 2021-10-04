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


async function updatePostsCount(posts) {
  log('updatePostsCount - posts', posts)

  const postsCount = await getPostsCount()
  const oldUnreadPostsCount = postsCount.total || 0
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
  await savePostsCount(newPostsCount)

  log('updatePostsCount - newUnreadPostsCount', newUnreadPostsCount)
  const hasNewUnreadPosts = newUnreadPostsCount > oldUnreadPostsCount
  return { newUnreadPostsCount, hasNewUnreadPosts }
}

export function listPosts(posts) {
  console.group('listPosts')
  console.log('posts', posts)

  const result = sortBy(flatten(map(posts, (post) => post.posts)), (post) => -post.date);
  console.log('result', result)
  console.groupEnd()

  return result
}

export async function updatePosts () {
  const allPosts = await fetchAllPosts()
  const posts = listPosts(allPosts)
  const newPostsCount = await updatePostsCount(allPosts)
  log('updatePosts', { posts, newPostsCount })
  return { posts, newPostsCount }
}
