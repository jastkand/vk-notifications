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
    }
};
