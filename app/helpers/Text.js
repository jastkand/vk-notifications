import Autolinker from 'autolinker'

function linkify(text) {
  return Autolinker.link(text, {})
}

export function processText(content) {
  let text = content.trim().replace(/\n/g, '<br/>')
  text = linkify(text)
  return text.replace(/\[([^\|]+)\|([^\]]+)\]/gi, '<a href="https://vk.com/$1">$2</a>')
}
