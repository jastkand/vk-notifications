import React from 'react'
import HeaderButton from './HeaderButton'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faEraser } from '@fortawesome/free-solid-svg-icons/faEraser'
import { ToggleSoundHeaderButton } from './ToggleSoundHeaderButton'
import styles from './PopupHeader.css'

export default (props) => {
  const handleClearClick = () => {
    chrome.runtime.sendMessage({ action: "clean_up" })
  }

  const handleWatchPostsClick = () => {
    chrome.runtime.sendMessage({ action: "watch_post", read: 'ALL' })
  }

  const handleSettingsClick = () => {
    chrome.runtime.sendMessage({ action: "open_options_page" })
  }

  return (
    <header className={ styles.header }>
      <span className={ styles.title }>Оповещения VK</span>
      <div className={ styles.actions }>
        <HeaderButton
          onClick={ handleClearClick }
          icon={ faEraser }
          hidden={ true }
        />
        <HeaderButton
          onClick={ handleWatchPostsClick }
          icon={ faCheck }
          hidden={ !props.loggedIn }
          title="Прочитать всё"
        />
        <ToggleSoundHeaderButton />
        <HeaderButton
          onClick={ handleSettingsClick }
          icon={ faCog }
          title="Настройки"
        />
      </div>
    </header>
  )
}
