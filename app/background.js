import { isEmpty } from 'lodash'
import { log } from './helpers/Logger'
import { badgeText, updatePosts } from './helpers/Background'
import { getGroups } from './storages/GroupStorage'
import { getPostsCount, resetPostsCount, resetTotalPostsCount } from './storages/PostsCountStorage'
import { authListenerHandler } from './helpers/AuthHandler'

let groupPosts = []

function updatePostsCache ({ updateBadge = false } = {}) {
  return updatePosts().then(([posts, newPostsCount]) => {
    log('updatePosts - posts', posts)
    log('updatePosts - newPostsCount', newPostsCount)

    if (updateBadge) {
      chrome.browserAction.setBadgeText({ text: badgeText(newPostsCount) })
    }

    groupPosts = posts

    return [posts, newPostsCount]
  })
}

function resetTotalPostsCountCache () {
  return resetTotalPostsCount().then((value) => {
    chrome.browserAction.setBadgeText({ text: badgeText(value.total) })
    return value
  })
}

// Add onAlarm listener, that schedules tasks
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name == 'update_posts') {
    return updatePostsCache({ updateBadge: true })
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action == "vk_notification_auth") {
    let vkClientId           = '3696318'
    let vkRequestedScopes    = 'offline'
    let vkAuthenticationUrl  = `https://oauth.vk.com/authorize?client_id=${vkClientId}&scope=${vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token`

    chrome.tabs.create({ url: vkAuthenticationUrl, selected: true }, (tab) => {
      chrome.tabs.onUpdated.addListener(authListenerHandler(tab.id))
    })

    sendResponse({content: "OK"})
  }

  if (request.action === 'reset_posts_cache') {
    groupPosts = []

    updatePostsCache({ updateBadge: false }).then(() => {
      resetTotalPostsCountCache().then(() => {
        sendResponse({content: 'OK'})
      })
    })
  }

  if (request.action === 'notification_list') {
    getGroups().then((groups) => {
      if (isEmpty(groups)) {
        sendResponse({content: 'EMPTY_GROUP_ITEMS'})
      } else {
        if (groupPosts.length == 0) {
          updatePostsCache().then(([posts, number]) => {
            groupPosts = posts
            sendResponse({content: 'OK', data: posts, groups: groups})
          })
        } else {
          sendResponse({content: 'OK', data: groupPosts, groups: groups})
        }
      }
    })
  }

  if (request.action === 'open_options_page') {
    let optionsUrl = chrome.extension.getURL('options.html')

    chrome.tabs.query({ url: optionsUrl }, (tabs) => {
      if (tabs.length) {
        chrome.tabs.update(tabs[0].id, { active: true })
      } else {
        chrome.tabs.create({ url: optionsUrl })
      }
    })
    sendResponse({content: 'OK'})
  }

  if (request.action === 'watch_post') {
    if (request.read === 'ALL') {
      resetTotalPostsCountCache()
    } else {
      //      TODO: open tab with the clicked post
      //      chrome.tabs.query url: optionsUrl, (tabs)->
      //        if tabs.length
      //          chrome.tabs.update tabs[0].id, active: true
      //        else
      //          chrome.tabs.create url: optionsUrl
    }

    sendResponse({content: 'OK'})
  }

  if (request.action === 'clean_up') {
    resetPostsCount()
    sendResponse({content: 'OK'})
  }

  return true
})


chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("update_posts", {
    when: Date.now() + 1000,
    periodInMinutes: 5.0
  })
})

getPostsCount().then((value) => {
  log('onLaunch - getPostsCount', value)
  chrome.browserAction.setBadgeText({ text: badgeText(value.total) })
})
