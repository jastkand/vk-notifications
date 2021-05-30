import React from 'react'
import Post from './Post'
import styles from './Feed.css'

export default class Feed extends React.Component {
  componentDidMount () {
    document.addEventListener('click', this.visitAnchor)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.visitAnchor)
  }

  visitAnchor (event) {
    if (event.target.matches('a')) {
      let href = event.target.href

      if (href) {
        chrome.tabs.create({ url: href, selected: true })
      }

      event.preventDefault()
    }
  }

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
