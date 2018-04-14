import React from 'react'
import HeaderButton from './HeaderButton'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faEraser from '@fortawesome/fontawesome-free-solid/faEraser'
import styles from './PopupHeader.css'

export default class PopupHeader extends React.Component {
  handleClearClick() {
    chrome.runtime.sendMessage({ action: "clean_up" })
  }

  handleWatchPostsClick() {
    chrome.runtime.sendMessage({ action: "watch_post", read: 'ALL' })
  }

  handleSettingsClick() {
    chrome.runtime.sendMessage({ action: "open_options_page" })
  }

  render() {
    return (
      <header className={ styles.header }>
        <span className={ styles.title }>Оповещения VK</span>
        <div className={ styles.actions }>
          <HeaderButton
            onClick={ () => this.handleClearClick() }
            icon={ faEraser }
            hidden={ true }
          />
          <HeaderButton
            onClick={ () => this.handleWatchPostsClick() }
            icon={ faCheck }
            hidden={ !this.props.loggedIn }
            title="Прочитать все"
          />
          <HeaderButton
            onClick={ () => this.handleSettingsClick() }
            icon={ faCog }
            title="Настройки"
          />
        </div>
      </header>
    )
  }
}
