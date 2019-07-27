import React from 'react'
import Button from './Button'
import { removeToken } from '../storages/SessionStorage'

export default (props) => {
  const handleLogInClick = () => {
    chrome.runtime.sendMessage({ action: 'vk_notification_auth' }, (response) => {
      if (response.content == 'OK') {
        if (props.afterLogInClick) {
          props.afterLogInClick()
        }
      }
    })
  }

  const handleLogOutClick = async () => {
    try {
      await removeToken()
      if (props.afterLogOutClick) {
        props.afterLogOutClick()
      }
    } catch (e) {
      /* handle error */
      console.log(e);
    }
  }

  let button

  if (props.accessToken) {
    button = <Button onClick={ handleLogOutClick }>Выйти</Button>
  } else {
    button = <Button onClick={ handleLogInClick }>Войти</Button>
  }

  return props.hidden ? null : button
}
