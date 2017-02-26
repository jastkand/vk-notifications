import React from 'react'
import Post from './Post'

export default class FeedContainer extends React.Component {
  constructor() {
    super()
    this.state = { posts: [], groups: [] }
  }

  componentDidMount() {
    chrome.runtime.sendMessage({ action: "noification_list" }, (response) => {
      if (response.content == 'EMPTY_GROUP_ITEMS') {
        this.setState({ posts: [], groups: [] })
      } else {
        this.setState({ posts: response.data, groups: response.groups })
      }
    })
  }

  render() {
    return <Feed posts={ this.state.posts } groups={ this.state.groups } />;
  }
}

class Feed extends React.Component {
  render() {
    let postNodes = this.props.posts.map((post) => {
      let group = this.props.groups[post.owner_id]

      return group ? <Post key={ post.id } post={ post } group={ group } /> : null
    })

    return (
      <div className="post-list">
        {postNodes}
      </div>
    )
  }
}
