_ = require('lodash')
API = require('./API')
helpers = require('./helpers.js')
log = helpers.log
Promise = require('es6-promise').Promise

groupPosts = []

postsCount = {}

# The variable is used for storing the new value of postsCount
#
# Finally the content should be sent to postsCount variable

newPostsCount = {}


totalNewPosts = 0


# Returns a badge text according to number of posts
#
badgeText = (number) ->
  return '' if number <= 0 or number is undefined
  return '10+' if number > 10
  "#{number}"


updatePosts = (fn) ->
  if fn and typeof fn is 'function'
    callback = fn
  else
    callback = ->

  # Get access_token from localstorage
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    token = items.vkaccess_token

    log('updatePosts - vkaccess_token', token)

    if token.length isnt undefined
      chrome.storage.local.get 'group_items': {}, (items) ->
        unless _.isEmpty(items.group_items)

          log('updatePosts - items.group_items', items.group_items)

          requestPromisses = []
          for key, item of items.group_items
            url = API.requestUrl('wall.get', { owner_id: key, count: 10, access_token: token })
            requestPromisses.push(fetch(url).then((response) -> response.json()))

          log('updatePosts - requestPromisses', requestPromisses)

          Promise.all(requestPromisses).then (schemas) ->
            if API.isAuthError(schemas[0])
              log 'updatePosts - remove authentication token'
              chrome.storage.local.remove 'vkaccess_token'
            else
              processPosts schemas, callback


processSingleRequest = (post) ->

  log('processSingleRequest - post', post)

  # If the group doesn't have any posts than post.response[1] will be undefuned
  # and calling to_id will caouse the error
  groupId = post.response[1].to_id unless post.response[1] is undefined

  log('processSingleRequest - groupId', groupId)

  # if the new group was added
  if postsCount[groupId] is undefined

    log('processSingleRequest - when postsCount[groupId] is undefined - totalNewPosts', totalNewPosts)

    # All posts from that group are new
    # Unless the group is undefined
    totalNewPosts += 10 unless groupId is undefined
  else

    log('processSingleRequest - when postsCount[groupId] is not undefined - posts[0].response[0]', post.response[0])
    log('processSingleRequest - when postsCount[groupId] is not undefined - postsCount[groupId]', postsCount[groupId])

    unless post.response[0] - postsCount[groupId] < 0
      totalNewPosts += post.response[0] - postsCount[groupId]

    log('processSingleRequest - when postsCount[groupId] is not undefined - totalNewPosts', totalNewPosts)

  log('processSingleRequest - totalNewPosts', totalNewPosts)

  # store the number of total posts in that group
  newPostsCount[groupId] = post.response[0] unless post.response[0] is 0

  return _.rest(post.response)


prosessArrayOfRequests = (posts) ->

  log('prosessArrayOfRequests - posts', posts)

  result = _.flatten(
    _.map posts, (requests) ->
      return processSingleRequest(requests)
  )
  return result


processPosts = (posts, fn) ->

  log('processPosts - posts', posts)
  log('processPosts - postsCount', postsCount)

  newPostsCount = {}

  if _.isArray(posts)
    responses = prosessArrayOfRequests(posts)
  else
    responses = processSingleRequest(posts)

  log('processPosts - responses', responses)

  postsCount = newPostsCount

  log('processPosts - postsCount', postsCount)

  # Save new value of postsCount to localstorage
  chrome.storage.local.set {'posts_count': postsCount}

  posts = _.sortBy responses, (item) -> return -item.date

  log('processPosts - posts', posts)
  log('processPosts - totalNewPosts', totalNewPosts)

  if fn and typeof fn is "function"
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
  if alarm.name is 'update_posts'

    log('onAlarm - postsCount', postsCount)

    updatePosts (posts, totalNewPosts) ->

      log('onAlarm update_posts, callback - posts', posts)
      log('onAlarm update_posts, callback - totalNewPosts', totalNewPosts)

      chrome.browserAction.setBadgeText({text: badgeText(totalNewPosts)})
      groupPosts = posts


chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  if request.action is "vk_notification_auth"
    vkClientId           = '3696318'
    vkRequestedScopes    = 'offline'
    vkAuthenticationUrl  = "https://oauth.vk.com/authorize?client_id=#{vkClientId}&scope=#{vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token"

    chrome.tabs.create {url: vkAuthenticationUrl, selected: true}, (tab) ->
      chrome.tabs.onUpdated.addListener(listenerHandler(tab.id))

    sendResponse({content: "OK"})

  if request.action is "noification_list"
    chrome.storage.local.get 'group_items': {}, (items) ->
      if _.isEmpty(items.group_items)
        sendResponse({content: 'EMPTY_GROUP_ITEMS'})
      else
        if groupPosts.length is 0
          updatePosts (posts, number)->
            groupPosts = posts

            sendResponse({content: 'OK', data: posts, groups: items.group_items})
        else
          # Hack way to add latency before data recieving
          # In other way content is rendered so fast that it become scrolled to bottom
          setTimeout ->
              sendResponse({content: 'OK', data: groupPosts, groups: items.group_items})
          , 50

  if request.action is "open_options_page"
    optionsUrl = chrome.extension.getURL('options.html')

    chrome.tabs.query url: optionsUrl, (tabs)->
      if tabs.length
        chrome.tabs.update tabs[0].id, active: true
      else
        chrome.tabs.create url: optionsUrl

    sendResponse({content: 'OK'})

  if request.action is "watch_post"
    if request.read is 'ALL'
      totalNewPosts = 0
      chrome.browserAction.setBadgeText({text: badgeText(totalNewPosts)})
    else
#      TODO: open tab with the clicked post
#      chrome.tabs.query url: optionsUrl, (tabs)->
#        if tabs.length
#          chrome.tabs.update tabs[0].id, active: true
#        else
#          chrome.tabs.create url: optionsUrl

    sendResponse({content: 'OK'})

  if request.action is "clean_up"
    chrome.storage.local.remove 'posts_count'
    postsCount = {}

    log('on clean_up - postsCount', postsCount)

    sendResponse({content: 'OK'})

  true


chrome.runtime.onInstalled.addListener ->
  chrome.alarms.create "update_posts",
    when: Date.now() + 1000
    periodInMinutes: 5.0

chrome.storage.local.get 'posts_count': {}, (items) ->
  postsCount = items.posts_count

  log('onLaunch - postsCount', postsCount)

  chrome.browserAction.setBadgeText({text: badgeText(postsCount.total)})
