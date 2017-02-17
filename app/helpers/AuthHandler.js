import { isEmpty } from 'lodash'
import { saveToken } from '../storages/SessionStorage'

function showError(title, description) {
  alert(title + '\n' + description)
}

function getUrlParameterValue(url, parameterName) {
  let urlParameters = url.substr(url.indexOf("#") + 1)
  urlParameters = urlParameters.split("&")

  urlParameters.forEach((param) => {
    let temp = param.split("=")

    if (temp[0] === parameterName) {
      return temp[1] === undefined ? true : temp[1]
    }
  })
}

// Chrome tab update listener handler. Return a function which is used as a listener itself by chrome.tabs.obUpdated
//
// @param  {string} authenticationTabId Id of the tab which is waiting for grant of permissions for the application
//
// @return {function}                   Listener for chrome.tabs.onUpdated
//
export function listenerHandler(authenticationTabId) {
  return function tabUpdateListener(tabId, changeInfo) {
    if (tabId === authenticationTabId && changeInfo.url != undefined && changeInfo.status === "loading") {
      if (changeInfo.url.indexOf('oauth.vk.com/blank.html') > -1) {
        let authenticationTabId
        chrome.tabs.onUpdated.removeListener(tabUpdateListener)

        let vkAccessToken = getUrlParameterValue(changeInfo.url, 'access_token')

        if (isEmpty(vkAccessToken)) {
          showError('Authentication Error', 'Access token is not defined')
          return
        }

        vkAccessTokenExpiredFlag = Number(getUrlParameterValue(changeInfo.url, 'expires_in'))

        if ((vkAccessTokenExpiredFlag !== 0)) {
          showError('Authentication Error', `Access token cannot be used`)
          return
        }

        saveToken(vkAccessToken).then(() => chrome.tabs.remove(tabId))
      }
    }
  }
}
