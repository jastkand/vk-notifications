import React from 'react'
import styles from './Button.css'

export default class Button extends React.Component {
  render() {
    let modifierClass = styles[this.props.className]
    let btnClass = `${styles.btn}`

    if (modifierClass) {
      btnClass = `${btnClass} ${modifierClass}`
    }

    return (
      <button onClick={ this.props.onClick } className={ btnClass }>{ this.props.children }</button>
    )
  }
}
