$(document).on 'click', 'a', (e) ->
  chrome.tabs.create {url: $(this).attr('href'), selected: true}

  e.preventDefault()


$ ->
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('#authBtn').show()
      return

    API.wallGet '-52955676', items.vkaccess_token, (data) ->
      for item, i in data.response
        continue if i is 0
        $('<div />', {class: 'item'}).html(replaceURLWithHTMLLinks item.text).append(
          $('<span />', {class: 'datestamp'}).html(dateFormat(item.date * 1000, 'longDate'))
        ).appendTo $('#notifications')


  $('#authBtn').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}

    e.preventDefault()


  $('#signoutBtn').click (e) ->
    chrome.storage.local.remove 'vkaccess_token'
    $('#list li').remove()
    $('#authBtn').show()
