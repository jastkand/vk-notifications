import React from 'react'
import Button from '../Button'
import classNames from 'classnames'

export default class AuthPanel extends React.Component {
  render() {
    let panelClass = classNames(
      "auth-panel",
      { 'is-invisible': this.props.hidden }
    )
    let button;
    if (this.props.accessToken) {
      button = <Button onClick={this.props.onLogOutClick}>Выйти</Button>
    } else {
      button = <Button onClick={this.props.onLogInClick}>Войти</Button>
    }

    return (
      <div className={ panelClass }>{ button }</div>
    )
  }
}
