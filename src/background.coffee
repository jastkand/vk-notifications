# Display an alert with an error message, description
#
# @param  {string} textToShow  Error message text
# @param  {string} errorToShow Error to show

displayAnError = (textToShow, errorToShow) ->
  alert(textToShow + '\n' + errorToShow)


# Retrieve a value of a parameter from the given URL string
#
# @param  {string} url           Url string
# @param  {string} parameterName Name of the parameter
#
# @return {string}               Value of the parameter

getUrlParameterValue = (url, parameterName) ->
  urlParameters  = url.substr(url.indexOf("#") + 1)
  parameterValue = ""

  urlParameters = urlParameters.split("&")

  for param in urlParameters
    temp = param.split("=")

    return temp[1] if temp[0] is parameterName

  parameterValue


# Chrome tab update listener handler. Return a function which is used as a listener itself by chrome.tabs.obUpdated
#
# @param  {string} authenticationTabId Id of the tab which is waiting for grant of permissions for the application
#
# @return {function}                   Listener for chrome.tabs.onUpdated

listenerHandler = (authenticationTabId) ->
  tabUpdateListener = (tabId, changeInfo) ->
    if tabId is authenticationTabId and changeInfo.url isnt undefined and changeInfo.status is "loading"
      if changeInfo.url.indexOf('oauth.vk.com/blank.html') > -1
        authenticationTabId = null
        chrome.tabs.onUpdated.removeListener(tabUpdateListener)

        vkAccessToken = getUrlParameterValue(changeInfo.url, 'access_token')

        if vkAccessToken is undefined or vkAccessToken.length is undefined
          displayAnError('vk auth response problem', 'access_token length = 0 or vkAccessToken == undefined')
          return

        vkAccessTokenExpiredFlag = Number(getUrlParameterValue(changeInfo.url, 'expires_in'))

        if vkAccessTokenExpiredFlag isnt 0
          displayAnError('vk auth response problem', 'vkAccessTokenExpiredFlag != 0' + vkAccessToken)
          return

        chrome.storage.local.set {'vkaccess_token': vkAccessToken}, ->
          chrome.tabs.remove tabId


chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  if request.action is "vk_notification_auth"
    vkClientId           = '3696318'
    vkRequestedScopes    = 'wall,offline'
    vkAuthenticationUrl  = "https://oauth.vk.com/authorize?client_id=#{vkClientId}&scope=#{vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token"

    chrome.tabs.create {url: vkAuthenticationUrl, selected: true}, (tab) ->
      chrome.tabs.onUpdated.addListener(listenerHandler(tab.id))

    sendResponse({content: "OK"})
