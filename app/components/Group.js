import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import styles from './Group.css'

export default class Group extends React.Component {
  render() {
    let groupId = this.props.gid
    let groupLink = `https://vk.com/${this.props.screen_name}`

    return (
      <div className={ styles.group }>
        <img className={ styles.image } src={ this.props.photo } />
        <a className={ styles.header } href={ groupLink } target="_blank" rel="noopener">{ this.props.name }</a>
        <Button onClick={ () => { this.props.unsubscribe(groupId) } }>Отписаться</Button>
      </div>
    )
  }
}
