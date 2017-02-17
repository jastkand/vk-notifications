_ = require('lodash')
API = require('../app/API')

Logger = require('../app/helpers/Logger')
log = Logger.log

Background = require('../app/helpers/Background')
badgeText = Background.badgeText
updatePosts = Background.updatePosts

GroupStorage = require('../app/storages/GroupStorage')
getGroups = GroupStorage.getGroups

PostsCountStorage = require('../app/storages/PostsCountStorage')
getPostsCount = PostsCountStorage.getPostsCount
resetPostsCount = PostsCountStorage.resetPostsCount
resetTotalPostsCount = PostsCountStorage.resetTotalPostsCount

AuthHandler = require('../app/helpers/AuthHandler')

groupPosts = []

# Add onAlarm listener, that schedules tasks
chrome.alarms.onAlarm.addListener (alarm)->
  if alarm.name is 'update_posts'
    updatePosts().then ([posts, newPostsCount]) ->

      log('updatePosts - posts', posts)
      log('updatePosts - newPostsCount', newPostsCount)

      chrome.browserAction.setBadgeText({text: badgeText(newPostsCount)})
      groupPosts = posts


chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  if request.action is "vk_notification_auth"
    vkClientId           = '3696318'
    vkRequestedScopes    = 'offline'
    vkAuthenticationUrl  = "https://oauth.vk.com/authorize?client_id=#{vkClientId}&scope=#{vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token"

    chrome.tabs.create {url: vkAuthenticationUrl, selected: true}, (tab) ->
      chrome.tabs.onUpdated.addListener(AuthHandler.handler(tab.id))

    sendResponse({content: "OK"})

  if request.action is "noification_list"
    getGroups().then((groups)->
      if _.isEmpty(groups)
        sendResponse({content: 'EMPTY_GROUP_ITEMS'})
      else
        if groupPosts.length is 0
          updatePosts().then ([posts, number])->
            groupPosts = posts

            sendResponse({content: 'OK', data: posts, groups: groups})
        else
          # Hack way to add latency before data recieving
          # In other way content is rendered so fast that it become scrolled to bottom
          setTimeout ->
              sendResponse({content: 'OK', data: groupPosts, groups: groups})
          , 50
    )

  if request.action is "open_options_page"
    optionsUrl = chrome.extension.getURL('options.html')

    chrome.tabs.query url: optionsUrl, (tabs)->
      if tabs.length
        chrome.tabs.update(tabs[0].id, active: true)
      else
        chrome.tabs.create(url: optionsUrl)

    sendResponse({content: 'OK'})

  if request.action is "watch_post"
    if request.read is 'ALL'
      resetTotalPostsCount().then((value) ->
        chrome.browserAction.setBadgeText({text: badgeText(value.total)})
      )
    else
#      TODO: open tab with the clicked post
#      chrome.tabs.query url: optionsUrl, (tabs)->
#        if tabs.length
#          chrome.tabs.update tabs[0].id, active: true
#        else
#          chrome.tabs.create url: optionsUrl

    sendResponse({content: 'OK'})

  if request.action is "clean_up"
    resetPostsCount()

    sendResponse({content: 'OK'})

  true


chrome.runtime.onInstalled.addListener(->
  chrome.alarms.create("update_posts", {
    when: Date.now() + 1000,
    periodInMinutes: 5.0
  })
)

getPostsCount().then((value) ->
  log('onLaunch - getPostsCount', value)

  chrome.browserAction.setBadgeText({ text: badgeText(value.total) })
)
