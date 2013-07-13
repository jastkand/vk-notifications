// Generated by CoffeeScript 1.6.3
(function() {
  $(document).on('click', 'a', function(e) {
    chrome.tabs.create({
      url: $(this).attr('href'),
      selected: true
    });
    return e.preventDefault();
  });

  $(function() {
    chrome.storage.local.get({
      'vkaccess_token': {}
    }, function(items) {
      if (items.vkaccess_token.length === void 0) {
        $('#auth').show();
        return;
      }
      return chrome.runtime.sendMessage({
        action: "noification_list",
        token: items.vkaccess_token
      }, function(response) {
        var item, _i, _len, _ref, _results;
        if (response.content === 'EMPTY_GROUP_ITEMS') {
          return $('#notifications').append($('<p />', {
            text: 'Список отслеживаемых групп пуст. Добавьте группы в настройках расширения.'
          }));
        } else {
          _ref = response.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            _results.push($('<div />', {
              "class": 'item'
            }).html(item.text).append($('<span />', {
              "class": 'datestamp'
            }).html(dateFormat(item.date * 1000, 'longDate'))).appendTo($('#notifications')));
          }
          return _results;
        }
      });
    });
    $('#auth').click(function(e) {
      chrome.runtime.sendMessage({
        action: "vk_notification_auth"
      });
      return e.preventDefault();
    });
    $('#signout').click(function(e) {
      chrome.storage.local.remove('vkaccess_token');
      $('#list li').remove();
      return $('#auth').show();
    });
    $('#clean-up').click(function(e) {
      chrome.runtime.sendMessage({
        action: "clean_up"
      });
      return e.preventDefault();
    });
    return $('#settings').click(function(e) {
      chrome.runtime.sendMessage({
        action: "open_options_page"
      });
      return e.preventDefault();
    });
  });

}).call(this);
