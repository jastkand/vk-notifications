replaceURLWithHTMLLinks = (text) ->
  exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
  text.replace exp, "<a href='$1'>$1</a>"


$(document).on 'click', 'a', (e) ->
  chrome.tabs.create {url: $(this).attr('href'), selected: true}

  e.preventDefault()


$ ->
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('#authBtn').show()
      return

    console.log items.vkaccess_token

    API.wallGet '-52955676', items.vkaccess_token, (data) ->
      for item, i in data.response
        continue if i is 0
        $('#notifications').append $('<div />', {class: 'item'}).html(replaceURLWithHTMLLinks item.text)


  $('#authBtn').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}, (response) ->
      console.log(response.content)

    e.preventDefault()


  $('#signoutBtn').click (e) ->
    chrome.storage.local.remove 'vkaccess_token'
    $('#list li').remove()
    $('#authBtn').show()
