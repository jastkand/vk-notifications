const apiVersion = '5.95'

function buildQueryParams (obj) {
  let str = []
  for (let p in obj) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
  }
  return str.join('&')
}

export const call = async (method, params) => {
  console.group('API.call')
  const url = requestUrl(method, params);
  console.log({ url })

  const response = await fetch(url, { method: 'POST' })
  console.groupEnd()

  return response.json()
}

function requestUrl (method, params) {
  let paramsString;
  if (params && typeof params === 'object') {
    paramsString = buildQueryParams({
      ...params,
      v: apiVersion,
    })
  } else {
    paramsString = params
  }
  return `https://api.vk.com/method/${method.toString()}?${paramsString}`
}

export function isAuthError (response) {
  return response && response.error && response.error.error_code == 5
}
