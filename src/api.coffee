window.API =
  getWall: (owner_id, access_token, callback) ->
    requestUrl = "https://api.vk.com/method/wall.get?owner_id=#{owner_id.toString()}&access_token=#{access_token.toString()}"
    $.ajax
      url: requestUrl,
      success: (data) ->
        if callback && typeof(callback) == "function"
          callback data
