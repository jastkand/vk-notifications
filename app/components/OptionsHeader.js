import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import styles from './OptionsHeader.css'

export default class OptionsHeader extends React.Component {
  render() {
    return (
      <header className={ styles.header }>
        <span>Оповещения VK</span>
        <Button onClick={ this.props.unsubscribeAll }>Очистить список групп</Button>
      </header>
    )
  }
}
