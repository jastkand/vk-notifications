import React from 'react'
import Button from './Button'
import { removeToken } from '../storages/SessionStorage'

export default class AuthPanel extends React.Component {
  handleLogInClick() {
    chrome.runtime.sendMessage({ action: 'vk_notification_auth' }, (response) => {
      if (response.content == 'OK') {
        if (this.props.afterLogInClick) {
          this.props.afterLogInClick()
        }
      }
    })
  }

  handleLogOutClick() {
    removeToken().then(() => {
      if (this.props.afterLogOutClick) {
        this.props.afterLogOutClick()
      }
    })
  }

  render() {
    let button

    if (this.props.accessToken) {
      button = <Button onClick={ () => this.handleLogOutClick() }>Выйти</Button>
    } else {
      button = <Button onClick={ () => this.handleLogInClick() }>Войти</Button>
    }

    return this.props.hidden ? null : button
  }
}
