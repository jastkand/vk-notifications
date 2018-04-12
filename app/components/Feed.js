import React from 'react'
import Post from './Post'
import styles from './Feed.css'

export default class Feed extends React.Component {
  render() {
    let postNodes = this.props.posts.map((post) => {
      let group = this.props.groups[post.owner_id]

      return group ? <Post key={ post.id } post={ post } group={ group } /> : null
    })

    return (
      <div className={ styles.feed }>
        {postNodes}
      </div>
    )
  }
}
