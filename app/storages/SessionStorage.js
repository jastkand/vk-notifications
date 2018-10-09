export function getToken() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get({ "vkaccess_token": null }, (items) => {
      resolve(items.vkaccess_token)
    })
  })
}

export function saveToken(accessToken) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ "vkaccess_token": accessToken }, () => resolve(accessToken))
  })
}

export function removeToken() {
  chrome.storage.local.remove("vkaccess_token")
  return Promise.resolve()
}
