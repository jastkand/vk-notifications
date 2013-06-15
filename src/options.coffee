groupItems = []


addGroupItemToStroage = (item, fn) ->
  console.log groupItems
  console.log item
  if item
    if fn and fn.success and typeof fn.success is "function"
      callback = fn.success
    else
      callback = ->

    groupItems.push item unless item in groupItems
    chrome.storage.local.set {'group_items': groupItems}, callback

    console.log groupItems
  else
    if fn and fn.error and typeof fn.error is "function"
      fn.error 'item is undefined'


removeGroupItemFromStorage = (item, fn) ->
  console.log item

  if item
    if fn and fn.success and typeof fn.success is "function"
      callback = fn.success
    else
      callback = ->

    itemIndex = groupItems.indexOf(item)
    groupItems.splice(itemIndex, 1)

    chrome.storage.local.set {'group_items': groupItems}, callback
  else
    if fn and fn.error and typeof fn.error is "function"
      fn.error 'item is undefined'


drawGroupItem = (owner, response) ->
  owner
    .append($('<img />', {src: response.photo}))
    .append($('<a />', {class: 'header', href: "http://vk.com/#{response.screen_name}", text: response.name}))
    .append($('<button />', {class: 'btn', name: 'removeGroupItem', text: 'Отписаться', 'data-group': response.gid}))


$(document).on 'click', 'button[name=removeGroupItem]', (e) ->
  $self = $(this)
  removeGroupItemFromStorage $(this).data('group'), success: ->
    $self.parent().remove()
  e.preventDefault()


$(document).on 'click', 'button[name=saveGroupItem]', (e) ->
  $self = $(this)
  $parent = $self.parent()

  $loader = $parent.find('.loader')
  $loader.addClass('visible')

  $status = $parent.find('.status')
  $status.removeClass('visible')

  $pageUrl = $parent.find('[name=pageUrl]')

  url = $pageUrl.val()
  shortName = url.match(/vk.com\/(\w+)/)

  unless shortName
    $status.text('Неверный формат ссылки').addClass('visible')
    $loader.removeClass('visible')
    return

  API.call 'groups.getById', {gid: shortName[1]}, (data) ->
    unless data.error
      addGroupItemToStroage data.response[0].gid, success: ->
        $pageUrl.remove()
        $self.remove()
        drawGroupItem($parent, data.response[0])
    else
      $status.text('Группа не найдена').addClass('visible')
      $loader.removeClass('visible')
      return

  $loader.removeClass('visible')
  e.preventDefault()


$ ->
  $('#cleanGroupItems').click (e)->
    chrome.storage.local.remove 'group_items', ->
      $('.item').remove()

    e.preventDefault()


  $('#addGroupItem').click (e)->
    $input = $('<input />', {type: 'text', name: 'pageUrl', placeholder: 'Ссылка на группу'})
    $('<div />', {class: 'item'})
      .append($input)
      .append($('<button />', {class: 'btn', name: 'saveGroupItem', text: 'Подписаться'}))
      .append($('<div />', {class: 'loader'})).appendTo $('.option-items')

    $input.focus()

    e.preventDefault()


  $('#authBtn').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}, (response) ->
      if response.content is 'OK'
        $('.authActions').hide()
        $('.option-items, #addGroupItem').show()

    e.preventDefault()


  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('.authActions').show()
      $('.option-items, #addGroupItem').hide()
    return


  chrome.storage.local.get 'group_items': [], (items) ->
    groupItems = items.group_items

    for item in groupItems
      API.call 'groups.getById', {gid: item}, (data) ->
        unless data.error
          $parent = $('<div />', {class: 'item'})
          $('.option-items').append($parent)

          drawGroupItem($parent, data.response[0])
