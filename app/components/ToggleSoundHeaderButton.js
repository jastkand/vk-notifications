import React from 'react'
import HeaderButton from './HeaderButton'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash'
import { defaultSettings, getSettings, saveSettings } from '../storages/SettingsStorage'

export default class ToggleSoundsHeaderButton extends React.Component {
  constructor () {
    super()
    this.state = { settings: defaultSettings }
  }

  handleClick () {
    let settings = this.state.settings
    settings.disableSounds = !settings.disableSounds
    saveSettings(settings).then((settings) => {
      this.setState({ settings })
    })
  }

  componentDidMount () {
    getSettings().then((settings) => {
      this.setState({ settings })
    })
  }

  render () {
    let icon, title
    if (this.state.settings.disableSounds) {
      icon = faBellSlash
      title = "Включить звуковые оповещения"
    } else {
      icon = faBell
      title = "Выключить звуковые оповещения"
    }
    return <HeaderButton onClick={ () => this.handleClick() } icon={ icon } title={ title } />
  }
}

