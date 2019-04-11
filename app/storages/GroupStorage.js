import { call, isAuthError } from '../API'
import { getToken } from './SessionStorage'

export function getGroups() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.get({ "group_items": {} }, (items) => {
      resolve(items.group_items)
    })
  })
}

export function addGroup(item) {
  return new Promise(function(resolve, reject) {
    if (item) {
      getGroups().then((items) => {
        let groups = items
        groups[item.gid] = item

        chrome.storage.local.set({ "group_items": groups }, () => {
          resolve(groups)
        })
      })
    } else {
      reject({ error: 'item is undefined' })
    }
  })
}

export function fetchGroupByUrl(url) {
  let shortName = url.match(/vk.com\/([\w\.]+)/)

  return new Promise(function(resolve, reject) {
    if (shortName) {
      let eventMatch = shortName[1].match(/event(\d+)/)
      if (eventMatch) {
        shortName = eventMatch
      }

      getToken().then((token) => {
        fetchGroup(shortName[1], token)
          .then((data) => {
            if (!data.error) {
              addGroup(data)
                .then(resolve)
                .catch(reject)
            } else {
              if (isAuthError(data)) {
                reject({ error: 'Ошибка авторизации' })
              } else {
                reject({ error: 'Группа не найдена' })
              }
            }
          })
      })
    } else {
      reject({ error: 'Неверный формат ссылки' })
    }
  })
}

function fetchGroup(name, accessToken) {
  return call('groups.getById', { group_id: name, access_token: accessToken })
    .then((response) => {
      if (response.error) {
        return response
      } else {
        return normalizeGroup(response.response[0])
      }
    })
}

// Should standartize two API versions responses:
// gid, is_closed, name, photo, photo_big, photo_medium, screen_name, type
// id, is_closed, name, photo_50, photo_100, photo_200, screen_name, type
function normalizeGroup(data) {
  return {
    gid: `-${data['gid'] || data['id']}`,
    is_closed: data['is_closed'],
    name: data['name'],
    photo: data['photo_50'] || data['photo'],
    photo_big: data['photo_big'] || data['photo_200'],
    photo_medium: data['photo_medium'] || data['photo_100'],
    screen_name: data['screen_name'],
    type: data['type']
  }
}

export function refreshGroups(accessToken) {
  getGroups().then((groups) => {
    let refreshedGroups = {}

    Object.keys(groups).forEach((key) => {

    })
  })
}

export function removeGroup(groupId) {
  return new Promise(function(resolve, reject) {
    if (groupId) {
      getGroups().then((items) => {
        let groups = items
        delete groups[groupId]

        chrome.storage.local.set({ "group_items": groups }, () => {
          resolve(groups)
        })
      })
    } else {
      reject({ error: 'item is undefined' })
    }
  })
}

export function removeAllGroups() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.remove("group_items", () => {
      resolve({})
    })
  })
}
