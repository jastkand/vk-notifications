import { get, chunk, forEach } from 'lodash'
import { log } from '../helpers/Logger'
import { call, isAuthError } from '../API'
import { getGroups } from '../storages/GroupStorage'
import { getToken, removeToken } from '../storages/SessionStorage'

export function fetchAllPosts() {
  return Promise.all([getToken(), getGroups()])
    .then(([token, groups]) => {
      if (!token) {
        return Promise.reject({ error: 'auth_error', message: 'Access token is missing' })
      }

      let groupIds = Object.keys(groups)
      let requestPromises = []

      // Maximum API request number in stored functions on VK API
      let chunkSize = 25;
      forEach(chunk(groupIds, chunkSize), (groupIdsChunk) => {
        requestPromises.push(call('execute.getPosts', {
          group_ids: groupIdsChunk.join(','),
          access_token: token
        }))
      })

      return Promise.all(requestPromises).then((responses) => {
        if (responses.length === 0) {
          return []
        }

        if (isAuthError(responses[0].data)) {
          removeToken()
          return Promise.reject({ error: 'auth_error', message: 'Authentication failure', response: responses })
        } else {
          return formatQueryResult(responses)
        }
      })
    })
}

function formatQueryResult (responses) {
  let results = []

  forEach(responses, (responseChunk) => {
    forEach(responseChunk.data.response, (post) => {
      results.push(normalizePost(post))
    })
  })

  return results
}

function normalizePost(post) {
  log('normalizePost - post', post)

  // If the group doesn't have any posts then post.response.items will be undefined
  // and calling owner_id will cause the error
  let groupId = get(post, ['items', 0, 'owner_id'])

  log('normalizePost - groupId', groupId)

  return { groupId: groupId, totalPostsCount: post.count, posts: post.items }
}
