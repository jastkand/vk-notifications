function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

export function call(method, params) {
  return fetch(requestUrl(method, params))
}

export function requestUrl(method, params) {
  var paramsString;
  if (params && typeof params === "object") {
    paramsString = serialize(params)
  }
  else {
    paramsString = params
  }
  return `https://api.vk.com/method/${method.toString()}?${paramsString}`
}
