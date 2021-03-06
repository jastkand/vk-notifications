import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { processText } from '../helpers/Text'
import Attachments from './Attachments'
import FormattedDate from './FormattedDate'
import styles from './Post.css'

const PostContent = ({ text }) => {
  if (isEmpty(text)) {
    return null
  }

  return (
    <div className={ styles.content } dangerouslySetInnerHTML={{ __html: processText(text) }} />
  )
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
        <div className={ styles.quote }>
          <PostContent text={ copyHistoryPost.text } />
          <Attachments attachments={ copyHistoryPost.attachments } postLink={ postLink } />
        </div>
      )
    }

    return (
      <div className={ styles.post }>
        <div className={ styles['group-image'] }>
          <a href={ postLink }>
            <img src={ group.photo } title={ group.name } />
          </a>
        </div>
        <div className={ styles.wrapper }>
          <div className={ styles['group-name'] }>
            <a href={ postLink }>{ group.name }</a>
          </div>
          <PostContent text={ post.text } />
          <Attachments attachments={ post.attachments } postLink={ postLink } />
          { copyHistory }
          <FormattedDate date={ post.date } />
        </div>
      </div>
    )
  }
}
