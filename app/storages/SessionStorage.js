export function getToken() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.get({ 'vkaccess_token': null }, (items) => {
      resolve(items.vkaccess_token)
    })
  })
}

export function removeToken() {
  chrome.storage.local.remove('vkaccess_token')
  return Promise.resolve()
}
