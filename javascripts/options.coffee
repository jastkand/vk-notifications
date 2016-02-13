$ = require('jquery')
API = require('./API')
helpers = require('./helpers')
log = helpers.log

groupItems = {}
accessToken = null

# Adds group-item to localstorage
#
addGroupItemToStroage = (item, fn) ->
  if item
    if fn and fn.success and typeof fn.success is "function"
      callback = fn.success
    else
      callback = ->

    item.gid = "-#{item.gid}"

    groupItems[item.gid] = item
    chrome.storage.local.set {'group_items': groupItems}, callback
  else
    if fn and fn.error and typeof fn.error is "function"
      fn.error 'item is undefined'


# Removes group-item from localstorage
#
removeGroupItemFromStorage = (gid, fn) ->
  if gid
    if fn and fn.success and typeof fn.success is "function"
      callback = fn.success
    else
      callback = ->

    delete groupItems[gid]

    chrome.storage.local.set {'group_items': groupItems}, callback
  else
    if fn and fn.error and typeof fn.error is "function"
      fn.error 'item is undefined'


drawGroupItem = ($owner, content) ->
  $owner
    .append($('<img />', {src: content.photo}))
    .append($('<a />', {class: 'header', href: "http://vk.com/#{content.screen_name}", text: content.name}))
    .append($('<button />', {class: 'btn', name: 'removeGroupItem', text: 'Отписаться', 'data-group': content.gid}))


# Event handler to remove group-item from storage
#
$(document).on 'click', 'button[name=removeGroupItem]', (e) ->
  $self = $(this)
  removeGroupItemFromStorage $(this).data('group'), success: ->
    $self.parent().remove()
  e.preventDefault()


# Bind on 'enter' key pressed event listener for pageUrl input field
#
# Tries to save information about group to localstorage
#
$(document).on 'keypress', 'input[name=pageUrl]', (e) ->
  if e.which is 13
    $(this).parent().find('button[name=saveGroupItem]').click()


# Live listener of click event
#
# Tries to saves information about group to localstorage
#
$(document).on 'click', 'button[name=saveGroupItem]', (e) ->
  $self = $(this)
  $parent = $self.parent()

  $loader = $parent.find('.loader')
  $loader.addClass('visible')

  $status = $parent.find('.status')
  $status.removeClass('visible')

  $pageUrl = $parent.find('[name=pageUrl]')

  url = $pageUrl.val()
  shortName = url.match(/vk.com\/([\w\.]+)/)

  unless shortName
    $status.text('Неверный формат ссылки').addClass('visible')
    $loader.removeClass('visible')
    return

  eventMatch = shortName[1].match(/event(\d+)/)

  shortName = eventMatch if eventMatch

  API.call('groups.getById', { gid: shortName[1], access_token: accessToken })
     .then((response) -> response.json())
     .then((data) ->
    unless data.error
      addGroupItemToStroage data.response[0], success: ->
        $pageUrl.remove()
        $self.remove()
        drawGroupItem($parent, data.response[0])
    else
      $status.text('Группа не найдена').addClass('visible')
      $loader.removeClass('visible')
      return

  )
  $loader.removeClass('visible')
  e.preventDefault()


$ ->

  # Remove all group-items from local storage
  #
  $('#clean-items').click (e) ->
    chrome.storage.local.remove 'group_items', ->
      $('.item').remove()

    e.preventDefault()


  # Add controls for adding a group-item
  #
  $('#add-item').click (e) ->
    $input = $('<input />', {type: 'text', name: 'pageUrl', placeholder: 'Ссылка на группу'})
    $('<div />', {class: 'item'})
      .append($input)
      .append($('<button />', {class: 'btn', name: 'saveGroupItem', text: 'Подписаться'}))
      .append($('<div />', {class: 'loader'})).appendTo $('.option-items')

    $input.focus()

    e.preventDefault()


  # Auth button click listener
  #
  # Sends message to background script to run 'vk_notification_auth' action
  #
  $('#auth').click (e) ->
    chrome.runtime.sendMessage {action: "vk_notification_auth"}, (response) ->
      if response.content is 'OK'
        $('.auth-actions').hide()
        $('.option-items, #add-item').show()

    e.preventDefault()


  # Show auth button if user is not authorized
  #
  chrome.storage.local.get 'vkaccess_token': {}, (items) ->
    if items.vkaccess_token.length is undefined
      $('.auth-actions').show()
      $('.option-items, #add-item').hide()
      return
    else
      accessToken = items.vkaccess_token


  # Get group-items from local storage
  #
  chrome.storage.local.get 'group_items': {}, (items) ->
    groupItems = items.group_items

    for key, item of groupItems
      $parent = $('<div />', {class: 'item'})
      $('.option-items').append($parent)

      drawGroupItem($parent, item)

#      TODO: make update of information about group on opening options page
#
#      API.call('groups.getById', {gid: key}).then (data) ->
#        unless data.error
