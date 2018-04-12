import './global'

import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import GroupsContainer from './components/GroupsContainer'
import AuthPanel from './components/AuthPanel'
import OptionsHeader from './components/OptionsHeader'
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

    this.unsubscribeAll = this.unsubscribeAll.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.afterLogInClick = this.afterLogInClick.bind(this)
    this.afterLogOutClick = this.afterLogOutClick.bind(this)
  }

  unsubscribeAll() {
    removeAllGroups().then((groups) => {
      this.setState({ groups: groups })
    })
  }

  unsubscribe(groupId) {
    removeGroup(groupId).then((groups) => {
      this.setState({ groups: groups })
    })
  }

  subscribe(value) {
    return fetchGroupByUrl(value).then((groups) => {
      this.setState({ groups: groups })
    })
  }

  afterLogInClick() {
    // accessToken by itself is not required here. `true` means that user is signed in
    this.setState({ accessToken: true })
  }

  afterLogOutClick() {
    this.setState({ accessToken: null })
  }

  componentDidMount() {
    getToken().then((token) => {
      this.setState({ accessToken: token })
    })

    // TODO: make update of information about group on opening options page
    getGroups().then((groups) => {
      this.setState({ groups: groups })
    })
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
