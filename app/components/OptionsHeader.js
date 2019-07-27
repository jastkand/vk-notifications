import React from 'react'
import Button from './Button'
import styles from './OptionsHeader.css'

export const OptionsHeader = (props) => {
  return (
    <header className={ styles.header }>
      <span>Оповещения VK</span>
      <Button onClick={ props.unsubscribeAll }>Очистить список групп</Button>
    </header>
  )
}
