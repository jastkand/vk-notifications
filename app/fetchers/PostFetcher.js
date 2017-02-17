import { get, sortBy } from 'lodash'
import { log } from '../helpers/Logger'
import { call, isAuthError } from '../API'
import { getGroups } from '../storages/GroupStorage'
import { getToken, removeToken } from '../storages/SessionStorage'

function normalizePost(post) {
  log('normalizePost - post', post)

  // If the group doesn't have any posts then post.response.items will be undefined
  // and calling owner_id will cause the error
  let groupId = get(post, ['response', 'items', 0, 'owner_id'])

  log('normalizePost - groupId', groupId)

  return { groupId: groupId, totalPostsCount: post.response.count, posts: post.response.items }
}

function fetchPostsForGroup(groupId, accessToken) {
  return call('wall.get', { owner_id: groupId, count: 10, access_token: accessToken })
    .then((response) => {
      let data = response.data

      if (isAuthError(data)) {
        return Promise.reject({ error: 'auth_error', message: 'Authentication failure', response: data })
      } else {
        return Promise.resolve(normalizePost(data))
      }
    })
}

export function fetchAllPosts() {
  return Promise.all([getToken(), getGroups()])
    .then(([token, groups]) => {
      if (!token) {
        return Promise.reject({ error: 'auth_error', message: 'Access token is missing' })
      }

      let requestPromisses = Object.keys(groups).map((key) => fetchPostsForGroup(key, token))

      return Promise.all(requestPromisses)
    })
    .catch(({ error }) => {
      if (error == 'auth_error') {
        removeToken()
      }
    })
}
