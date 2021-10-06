export function getPostsCount() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ posts_count: {} }, (items) => resolve(items.posts_count))
  })
}

export async function resetTotalPostsCount() {
  const postsCount = await getPostsCount()
  postsCount['total'] = 0
  return savePostsCount(postsCount)
}

export function resetPostsCount() {
  return new Promise((resolve) => {
    chrome.storage.local.remove('posts_count', () => {
      resolve({})
    })
  })
}

export function savePostsCount(postsCount) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ 'posts_count': postsCount }, () => resolve(postsCount))
  })
}
