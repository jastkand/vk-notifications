var API = {
    wallGet: function(owner_id, access_token, callback) {
        var requestUrl = "https://api.vk.com/method/wall.get?owner_id=" + owner_id.toString() + "&access_token=" + access_token.toString();
        $.ajax({
            url: requestUrl,
            success: function(data) {
                if (callback && typeof callback === "function") {
                    callback(data);
                }
            }
        });
    },
    call: function(method, options, callback) {
        var optionsString, requestUrl;
        if (options && typeof options === "object") {
            optionsString = serialize(options);
        }
        else {
            optionsString = options;
        }
        requestUrl = "https://api.vk.com/method/" + method.toString() + "?" + optionsString;
        $.ajax({
            url: requestUrl,
            success: function(data) {
                if (callback && typeof callback === "function") {
                    callback(data);
                }
            }
        });
    }
};
