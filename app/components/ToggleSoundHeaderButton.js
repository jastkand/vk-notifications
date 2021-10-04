import React, { useState, useEffect } from 'react'
import HeaderButton from './HeaderButton'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash'
import { defaultSettings, getSettings, saveSettings } from '../storages/SettingsStorage'

export function ToggleSoundHeaderButton () {
  const [settings, setSettings] = useState(defaultSettings)

  useEffect(async () => {
    const settings = await getSettings()
    setSettings(settings)
  }, []);

  const handleClick = async () => {
    const newSettings = { ...settings, enableSounds: !settings.enableSounds }
    const updated = await saveSettings(newSettings)
    setSettings(updated)
  }

  let icon, title
  if (settings.enableSounds) {
    icon = faBell
    title = "Выключить звуковые оповещения"
  } else {
    icon = faBellSlash
    title = "Включить звуковые оповещения"
  }

  return (
    <HeaderButton onClick={ () => handleClick() } icon={ icon } title={ title } />
  )
}
