import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './HeaderButton.css'

export default (props) => {
  if (props.hidden) {
    return null
  }

  return (
    <a onClick={ props.onClick } className={ styles.button } title={ props.title }>
      <FontAwesomeIcon icon={ props.icon } size='lg' />
    </a>
  )
}
