import $ from '../node_modules/jquery'

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

export function call(method, options, callback) {
  $.ajax({
    url: requestUrl(method, options),
    success: function(data) {
      if (callback && typeof callback === "function") {
        callback(data)
      }
    }
  });
};

export function requestUrl(method, options) {
  var optionsString;
  if (options && typeof options === "object") {
    optionsString = serialize(options)
  }
  else {
    optionsString = options
  }
  return `https://api.vk.com/method/${method.toString()}?${optionsString}`
}
