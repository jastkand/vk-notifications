import React from 'react'
import { linkify } from '../../helpers/Text'
import jEmoji from 'emoji'
import Attachments from './Attachments'
import moment from 'moment'

moment.locale('ru')

export default class Post extends React.Component {
  groupLink(screen_name, item) {
    return `https://vk.com/${screen_name}?w=wall${item.owner_id}_${item.id}`
  }

  processText(content) {
    let text = content.trim().replace(/\n/g, '<br/>')
    text = linkify(text)
    text = text.replace(/\[([^\|]+)\|([^\]]+)\]/gi, '<a href="https://vk.com/$1">$2</a>')
    return jEmoji.unifiedToHTML(text)
  }

  render() {
    let { group, post } = this.props
    let postLink = this.groupLink(group.screen_name, post)

    console.log(post);

    return (
      <div className="item">
        <div className="group-image">
          <a href={ postLink }>
            <img src={ group.photo } title={ group.name } />
          </a>
        </div>
        <div className="item-content">
          <div className="group-name">
            <a href={ postLink }>{ group.name }</a>
          </div>
          <div className="text" dangerouslySetInnerHTML={{ __html: this.processText(post.text) }} />
          <Attachments attachments={ post.attachments } postLink={ postLink } />
          <span className='datestamp'>{ moment(post.date * 1000).format('LLL') }</span>
        </div>
      </div>
    )
  }
}
