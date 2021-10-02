Оповещения VK
=============

Расширение для Google Chrome, реализующее функцию оповещения о новых сообщениях из групп социальной сети VK

Установить с [Chrome Web Store](http://goo.gl/mZ88cA)

Скриншоты
---------

Окно редактирования отслеживаемых групп:

![](https://raw.github.com/jastkand/vk-notifications/master/promo/options_screen.png)

Всплавающее окно со списком сообщений из групп:

![](https://raw.github.com/jastkand/vk-notifications/master/promo/popup_screen.png)

Разработка
----------

```bash
$ yarn install
$ yarn dev
```

Build the extension:
--------------------

```bash
$ yarn build
```

## VK Stored Functions

```
var groupIds = Args.group_ids;
var groupIdsArray = [];
var i = 0;
var cursorStart = 0;
var cursorEnd = 0;
var l = groupIds.length;

while (i < l) {
    var isDelimiter = groupIds.substr(i, 1) == ",";

    if (isDelimiter || i == l - 1) {
      cursorEnd = i + 1;

      if (cursorEnd == l) {
        cursorEnd = cursorEnd + 1;
      }

      var groupId = groupIds.substr(cursorStart, cursorEnd - cursorStart - 1);
      cursorStart = cursorEnd;
      groupIdsArray.push(groupId);
    }

    i = i + 1;
};

var result = [];

var i = 0;
var l = groupIdsArray.length;
while (i < l) {
    result.push(API.wall.get({owner_id: groupIdsArray[i], count: 10, access_token: Args.access_token}));
    i = i + 1;
};

return result;
```

## Release steps

1. Bump version in `public/manifest.json`
2. `yarn build`
3. zip contents of a public directory
4. try out the zipped file locally
5. upload zip file to Chrome Webstore Developer Dashboard
