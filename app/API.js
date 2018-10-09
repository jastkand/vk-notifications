function serialize (obj) {
  let str = []
  for (let p in obj) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
  }
  return str.join("&")
}

export function call(method, params) {
  return fetch(requestUrl(method, params), { method: 'post' })
    .then(res => res.json())
}

function requestUrl (method, params) {
  let paramsString;
  if (params && typeof params === "object") {
    paramsString = serialize(Object.assign({}, params, { v: '5.62' }))
  } else {
    paramsString = params
  }
  return `https://api.vk.com/method/${method.toString()}?${paramsString}`
}

export function isAuthError (response) {
  return response && response.error && response.error.error_code == 5
}
