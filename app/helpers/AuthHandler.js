import { isUndefined, isEmpty } from 'lodash'
import { saveToken } from '../storages/SessionStorage'

function showError(title, description) {
  alert(title + '\n' + description)
}

function getUrlParameterValue(url, parameterName) {
  let urlParameters = url.substr(url.indexOf("#") + 1)
  urlParameters = urlParameters.split("&")

  let paramValue

  urlParameters.forEach((param) => {
    let temp = param.split("=")

    if (temp[0] === parameterName) {
      paramValue = isUndefined(temp[1]) ? true : temp[1]
      return
    }
  })

  return paramValue
}

// Chrome tab update listener handler. Return a function which is used as a listener itself by chrome.tabs.obUpdated
//
// @param  {string} authenticationTabId Id of the tab which is waiting for grant of permissions for the application
//
// @return {function}                   Listener for chrome.tabs.onUpdated
//
export function authListenerHandler(authenticationTabId) {
  return function tabUpdateListener(tabId, changeInfo) {
    if (tabId === authenticationTabId && !isUndefined(changeInfo.url) && changeInfo.status === "loading") {
      if (changeInfo.url.indexOf('oauth.vk.com/blank.html') > -1) {
        chrome.tabs.onUpdated.removeListener(tabUpdateListener)

        let vkAccessToken = getUrlParameterValue(changeInfo.url, 'access_token')

        if (isEmpty(vkAccessToken)) {
          showError('Authentication Error', 'Access token is not defined')
          return
        }

        let vkAccessTokenExpiredFlag = Number(getUrlParameterValue(changeInfo.url, 'expires_in'))

        if ((vkAccessTokenExpiredFlag !== 0)) {
          showError('Authentication Error', 'Access token cannot be used')
          return
        }

        saveToken(vkAccessToken).then(() => chrome.tabs.remove(tabId))
      }
    }
  }
}
