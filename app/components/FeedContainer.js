import React from 'react'
import Feed from './Feed'

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
