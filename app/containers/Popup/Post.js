import React from 'react'
import { processText } from '../../helpers/Text'
import Attachments from './Attachments'
import { get } from 'lodash'
import moment from 'moment'

moment.locale('ru')

class PostContent extends React.Component {
  render() {
    return (
      <div className="text" dangerouslySetInnerHTML={{ __html: processText(this.props.text) }} />
    )
  }
}

export default class Post extends React.Component {
  groupLink(screen_name, item) {
    return `https://vk.com/${screen_name}?w=wall${item.owner_id}_${item.id}`
  }

  render() {
    let { group, post } = this.props
    let postLink = this.groupLink(group.screen_name, post)

    let copyHistory
    let copyHistoryPost = get(post, ['copy_history', 0])

    if (copyHistoryPost) {
      copyHistory = (
        <div className="item-quote">
          <PostContent text={ copyHistoryPost.text } />
          <Attachments attachments={ copyHistoryPost.attachments } postLink={ postLink } />
        </div>
      )
    }

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
          <PostContent text={ post.text } />
          <Attachments attachments={ post.attachments } postLink={ postLink } />
          { copyHistory }
          <span className='datestamp'>{ moment(post.date * 1000).format('LLL') }</span>
        </div>
      </div>
    )
  }
}
