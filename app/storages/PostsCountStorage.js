export function getPostsCount() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.get({ "posts_count": {} }, (items) => resolve(items.posts_count))
  })
}

export function resetTotalPostsCount() {
  return getPostsCount().then((postsCount) => {
    postsCount['total'] = 0
    return savePostsCount(postsCount)
  })
}

export function resetPostsCount() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.remove("posts_count", () => {
      resolve({})
    })
  })
}

export function savePostsCount(postsCount) {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.set({ 'posts_count': postsCount }, () => resolve(postsCount))
  })
}
