$ ->
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('#authBtn').show()
      return

    console.log items.vkaccess_token

    API.getWall '-52955676', items.vkaccess_token, (data) ->
      for item, i in data.response
        continue if i is 0
        $('#list').append $('<li />').html(item.text)


  $('#authBtn').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}, (response) ->
      console.log(response.content)

    e.preventDefault()


  $('#signoutBtn').click (e) ->
    chrome.storage.local.remove 'vkaccess_token'
    $('#list li').remove()
    $('#authBtn').show()
