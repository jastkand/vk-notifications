$(document).on 'click', 'a', (e) ->
  chrome.tabs.create {url: $(this).attr('href'), selected: true}

  e.preventDefault()


groupLink = (screen_name) ->
  "http://vk.com/#{screen_name}"


itemTemplate = (item, groups) ->
  group = groups[item.to_id]

  $('<div />', {class: 'item'})
    .append(
      $('<div />', {class: 'group-image'})
        .append( $('<a />', href: groupLink(group.screen_name)).append($('<img />', src: group.photo, title: group.name)) )
    )
    .append(
      $('<div />', class: 'item-content')
        .append(
          $('<div />', {class: 'group-name'})
            .append( $('<a />', href: groupLink(group.screen_name), text: group.name) )
        )
        .append( $('<div />', class: 'text').html(item.text) )
        .append( $('<span />', {class: 'datestamp'}).html(dateFormat(item.date * 1000, 'longDate')) )
    )

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
          $('#notifications').append(itemTemplate(item, response.groups));


  $('#auth').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}

    e.preventDefault()


  $('#signout').click (e) ->
    chrome.storage.local.remove 'vkaccess_token'
    $('#list li').remove()
    $('#auth').show()


  # Remove posts_count information from localstorage
  #
  $('#clean-up').click (e) ->
    chrome.runtime.sendMessage {action: "clean_up"}

    e.preventDefault()


  # Mark all new posts as read
  #
  $('#check-all').click (e) ->
    chrome.runtime.sendMessage {action: "watch_post", read: 'ALL'}

    e.preventDefault()


  # Open options tab, if the tab is already opened switch to one
  #
  $('#settings').click (e) ->
    chrome.runtime.sendMessage {action: "open_options_page"}

    e.preventDefault()
