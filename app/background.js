import { isEmpty } from 'lodash'
import { log } from './helpers/Logger'
import { badgeText, updatePosts } from './helpers/Background'
import { getGroups } from './storages/GroupStorage'
import { getPostsCount, resetPostsCount, resetTotalPostsCount } from './storages/PostsCountStorage'
import { authListenerHandler } from './helpers/AuthHandler'

let groupPosts = []

async function refreshPostsCache ({ updateBadge = false } = {}) {
  console.group('refreshPostsCache')

  try {
    const { posts, newPostsCount } = await updatePosts()

    if (updateBadge) {
      console.log('Update badge text');
      chrome.browserAction.setBadgeText({ text: badgeText(newPostsCount) })
    }

    groupPosts = posts

    return { posts, newPostsCount }
  } catch (e) {
    console.log(e);
  }

  console.groupEnd()
}

function resetTotalPostsCountCache () {
  return resetTotalPostsCount().then((value) => {
    chrome.browserAction.setBadgeText({ text: badgeText(value.total) })
    return value
  })
}

// Add onAlarm listener, that schedules tasks
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name == 'update_posts') {
    console.group('onAlarm')
    const result = await refreshPostsCache({ updateBadge: true })
    console.groupEnd()

    return result;
  }
})

const getPosts = async () => {
  console.group('Background: get posts')

  const groups = await getGroups();
  log('groups', groups);

  if (isEmpty(groups)) {
    return Promise.resolve({content: 'EMPTY_GROUP_ITEMS'})
  } else {
    if (groupPosts.length === 0) {
      console.log('No posts in cache. Loading...')
      const { posts, newPostsCount } = await refreshPostsCache();
      groupPosts = posts
      return Promise.resolve({content: 'OK', data: posts, groups: groups})
    } else {
      console.log('Giving posts from cache')
      return Promise.resolve({content: 'OK', data: groupPosts, groups: groups})
    }
  }
  console.groupEnd()
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const action = request.action;

  if (action == 'vk_notification_auth') {
    let vkClientId           = '3696318'
    let vkRequestedScopes    = 'offline'
    let vkAuthenticationUrl  = `https://oauth.vk.com/authorize?client_id=${vkClientId}&scope=${vkRequestedScopes}&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token`

    chrome.tabs.create({ url: vkAuthenticationUrl, selected: true }, (tab) => {
      chrome.tabs.onUpdated.addListener(authListenerHandler(tab.id))
    })

    sendResponse({content: 'OK'})
  }

  if (action === 'reset_posts_cache') {
    groupPosts = []

    refreshPostsCache({ updateBadge: false }).then(() => {
      resetTotalPostsCountCache().then(() => {
        sendResponse({content: 'OK'})
      })
    })
  }

  if (action === 'notification_list') {
    getPosts().then(sendResponse)
  }

  if (action === 'open_options_page') {
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

  if (action === 'watch_post') {
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

  if (action === 'clean_up') {
    resetPostsCount()
    sendResponse({content: 'OK'})
  }

  return true
})


chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('update_posts', {
    when: Date.now() + 1000,
    periodInMinutes: 5.0
  })
})

getPostsCount().then((value) => {
  log('onLaunch - getPostsCount', value)
  chrome.browserAction.setBadgeText({ text: badgeText(value.total) })
})
