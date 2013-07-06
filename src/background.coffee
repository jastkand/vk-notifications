groupPosts = []

postsCount = {}

updatePosts = ->
  # Get access_token from localstorage
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    token = items.vkaccess_token

    if token.length isnt undefined
      chrome.storage.local.get 'group_items': {}, (items) ->
        unless $.isEmptyObject(items.group_items)
          requestPromisses = []
          for key, item of items.group_items
            requestPromisses.push loadByUrl(API.requestUrl 'wall.get', {owner_id: key, count: 10, access_token: token})

          $.when.all(requestPromisses).then (schemas) ->
            console.log schemas
            processPosts schemas, (posts, totalNewPosts) ->
              console.log 'in callback'
              groupPosts = posts
              console.log groupPosts
              console.log postsCount


# Return a promise
#
# @param  {string} url  Request path
#
# @return {function} $.ajax function for specified request path

loadByUrl = (url) ->
  return $.ajax
    url: url
    dataType: 'json'


# Generate html object from data
#
# @param  {string} data  Array of data elements

processData = (data) ->
  result = _.flatten(
    _.map data, (requests) ->
      return _.rest(requests[0].response)
  )
  return _.sortBy result, (item) -> return -item.date


processPosts = (posts, fn) ->
  totalNewPosts = 0

  result = _.flatten(
    console.log posts
    _.map posts, (requests) ->

      console.log requests.response
      groupId = requests.response[1].to_id
      console.log groupId
      # if the new group was added
      if postsCount[groupId] is undefined

        # all posts from that group are new
        totalNewPosts += 10
      else
        unless requests.response[0] - postsCount[groupId] < 0
          totalNewPosts = requests.response[0] - postsCount[groupId]

      # store the number of total posts in that group
      postsCount[groupId] = requests.response[0] unless requests.response[0] is 0

      return _.rest(requests.response)
  )

  # Save new value of postsCount to localstorage
  chrome.storage.local.set {'posts_count': postsCount}

  posts = _.sortBy result, (item) -> return -item.date

  if fn and typeof fn is "function"
    console.log('callback')
    fn(posts, totalNewPosts)


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


# Add onAlarm listener, that schedules tasks
chrome.alarms.onAlarm.addListener (alarm)->
  updatePosts() if alarm.name is 'update_posts'


chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  if request.action is "vk_notification_auth"
    vkClientId           = '3696318'
    vkRequestedScopes    = 'wall,offline'
    vkAuthenticationUrl  = "https://oauth.vk.com/authorize?client_id=#{vkClientId}&scope=#{vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token"

    chrome.tabs.create {url: vkAuthenticationUrl, selected: true}, (tab) ->
      chrome.tabs.onUpdated.addListener(listenerHandler(tab.id))

    sendResponse({content: "OK"})

  if request.action is "noification_list"
    chrome.storage.local.get 'group_items': {}, (items) ->
      unless $.isEmptyObject(items.group_items)
        sendResponse({content: 'OK', data: groupPosts, groups: items.group_items})
#        requestPromisses = []
#        for key, item of items.group_items
#          requestPromisses.push loadByUrl(API.requestUrl 'wall.get', {owner_id: key, count: 15, access_token: request.token})
#
#        $.when.all(requestPromisses).then (schemas) ->
#          sendResponse({content: 'OK', data: processData(schemas), groups: items.group_items})
      else
        sendResponse({content: 'EMPTY_GROUP_ITEMS'})

  if request.action is "open_options_page"
    optionsUrl = chrome.extension.getURL('options.html')

    chrome.tabs.query url: optionsUrl, (tabs)->
      if tabs.length
        chrome.tabs.update tabs[0].id, active: true
      else
        chrome.tabs.create url: optionsUrl

    sendResponse({content: 'OK'})

  true


chrome.runtime.onInstalled.addListener ->
  chrome.storage.local.get 'posts_count': {}, (items) ->
    postsCount = items.posts_count

    chrome.alarms.create "update_posts",
      periodInMinutes: 1.0
