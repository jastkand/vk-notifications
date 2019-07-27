import React from 'react'
import styles from './Button.css'

export default (props) => {
  let modifierClass = styles[props.className]
  let btnClass = `${styles.btn}`

  if (modifierClass) {
    btnClass = `${btnClass} ${modifierClass}`
  }

  return (
    <button onClick={ props.onClick } className={ btnClass }>{ props.children }</button>
  )
}
