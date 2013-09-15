var API = {
    call: function(method, options, callback) {
        $.ajax({
            url: this.requestUrl(method, options),
            success: function(data) {
                if (callback && typeof callback === "function") {
                    callback(data);
                }
            }
        });
    },
    requestUrl: function(method, options) {
        var optionsString;
        if (options && typeof options === "object") {
            optionsString = serialize(options);
        }
        else {
            optionsString = options;
        }
        return "https://api.vk.com/method/" + method.toString() + "?" + optionsString;
    }
};
