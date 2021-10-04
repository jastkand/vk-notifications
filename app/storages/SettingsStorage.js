export const defaultSettings = {
  "disableSounds": false
}

export function getSettings () {
  return new Promise((resolve) => {
    chrome.storage.local.get({ "settings": defaultSettings }, (result) => {
      resolve(result.settings)
    })
  })
}

export function saveSettings (settings) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ "settings": settings }, () => resolve(settings))
  })
}
