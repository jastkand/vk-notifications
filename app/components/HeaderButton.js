import React from 'react'
import styles from './HeaderButton.css'

export default (props) => {
  let iconClass = `fa fa-${props.icon} ${styles.icon}`

  if (props.hidden) {
    return null
  }

  return (
    <a onClick={ props.onClick } className={ styles['nav-button'] } title={ props.title }>
      <i className={ iconClass }></i>
    </a>
  )
}
