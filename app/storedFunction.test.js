function parseGroupsIdsString (groupIds) {
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

  return groupIdsArray;
}

it('correctly parses groups string', () => {
  expect(parseGroupsIdsString('-123')).toEqual(['-123']);
  expect(parseGroupsIdsString('-123,-234')).toEqual(['-123', '-234']);
  expect(parseGroupsIdsString('-123,-234,-345,-456,123'))
    .toEqual(['-123', '-234', '-345', '-456', '123']);
});
