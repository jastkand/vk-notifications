import React from 'react'
import styles from './Button.css'

export default class Button extends React.Component {
  render() {
    let btnClass = `${styles.btn} ${styles[this.props.className]}`

    return (
      <a onClick={ this.props.onClick } className={ btnClass }>{ this.props.children }</a>
    )
  }
}
