import './global'

import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import GroupsContainer from './components/GroupsContainer'
import AuthPanel from './components/AuthPanel'
import { OptionsHeader } from './components/OptionsHeader'
import { getGroups, removeAllGroups, removeGroup, fetchGroupByUrl } from './storages/GroupStorage'
import { getToken } from './storages/SessionStorage'
import styles from './Options.css'

class Options extends React.Component {
  constructor() {
    super()
    this.state = {
      accessToken: null,
      groups: {},
    }
  }

  unsubscribeAll = async () => {
    const groups = await removeAllGroups()
    this.setState({ groups })
    this.resetPostsCache()
  }

  unsubscribe = async (groupId) => {
    const groups = await removeGroup(groupId)
    this.setState({ groups })
    this.resetPostsCache()
  }

  subscribe = (value) => {
    return fetchGroupByUrl(value).then((groups) => {
      this.setState({ groups: groups })
      this.resetPostsCache()
    })
  }

  afterLogInClick = () => {
    // accessToken by itself is not required here. `true` means that user is signed in
    this.setState({ accessToken: true })
  }

  afterLogOutClick = () => {
    this.setState({ accessToken: null })
  }

  resetPostsCache() {
    chrome.runtime.sendMessage({ action: 'reset_posts_cache' })
  }

  async componentDidMount () {
    const accessToken = await getToken()
    this.setState({ accessToken })

    // TODO: make update of information about group on opening options page
    const groups = await getGroups()
    this.setState({ groups })
  }

  render() {
    let groups

    if (this.state.accessToken) {
      groups = <GroupsContainer groups={ this.state.groups }
                                unsubscribe={ this.unsubscribe }
                                subscribe={ this.subscribe }
               />
    }

    return (
      <div className={ styles.wrapper }>
        <OptionsHeader unsubscribeAll={ this.unsubscribeAll } />
        <AuthPanel
          accessToken={ this.state.accessToken }
          afterLogInClick={ this.afterLogInClick }
          afterLogOutClick={ this.afterLogOutClick }
          hidden={ !!this.state.accessToken }
        />
        { groups }
      </div>
    )
  }
}

ReactDOM.render(<Options />, document.getElementById('app'));
