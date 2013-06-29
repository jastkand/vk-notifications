$(document).on 'click', 'a', (e) ->
  chrome.tabs.create {url: $(this).attr('href'), selected: true}

  e.preventDefault()


$ ->
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('#auth').show()
      return

    chrome.runtime.sendMessage {action: "noification_list", token: items.vkaccess_token}, (response) ->
      if response.content is 'EMPTY_GROUP_ITEMS'
        $('#notifications').append($('<p />', {text: 'Список отслеживаемых групп пуст. Добавьте группы в настройках расширения.'}))
      else
        for item in response.data
          $('<div />', {class: 'item'}).html(item.text).append(
            $('<span />', {class: 'datestamp'}).html(dateFormat(item.date * 1000, 'longDate'))
          ).appendTo $('#notifications')


  $('#auth').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}

    e.preventDefault()


  $('#signout').click (e) ->
    chrome.storage.local.remove 'vkaccess_token'
    $('#list li').remove()
    $('#auth').show()


  $('#settings').click (e) ->
    e.preventDefault()
    chrome.runtime.sendMessage {action: "open_options_page"}

