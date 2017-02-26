import jEmoji from 'emoji'

function linkify(text) {
  var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
    pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
    emailAddressPattern = /[\w.+-]+@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6})+/gim;

  return text
    .replace(urlPattern, '<a href="$&">$&</a>')
    .replace(pseudoUrlPattern, '$1<a href="http://$2">$2</a>')
    .replace(emailAddressPattern, '<a href="mailto:$&">$&</a>');
}

export function processText(content) {
  let text = content.trim().replace(/\n/g, '<br/>')
  text = linkify(text)
  text = text.replace(/\[([^\|]+)\|([^\]]+)\]/gi, '<a href="https://vk.com/$1">$2</a>')
  return jEmoji.unifiedToHTML(text)
}
