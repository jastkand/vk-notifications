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
$ npm install
$ npm run dev
```

Build the extension:
--------------------

```bash
$ npm run build
```

## VK Stored Functions

```
var groupIds = Args.group_ids;
var groupIdsArray = [];
var i = 0;
var cursor = 0;
var offset = 0;
var l = groupIds.length;

while (i < l) {
    var isDelimiter = groupIds.substr(i, 1) == ",";
    if (isDelimiter || i == l - 1) {
        if (isDelimiter) {
            offset = 0;
        } else {
            offset = 1;
        }

        var groupId = groupIds.substr(cursor, i + offset);
        groupIdsArray.push(groupId);
        cursor = i + 1;
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
