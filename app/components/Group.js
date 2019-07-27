import React from 'react'
import Button from './Button'
import styles from './Group.css'

export default (props) => {
  const groupId = props.gid
  const groupLink = `https://vk.com/${props.screen_name}`

  const onUnsubscribe = () => {
    props.unsubscribe(groupId)
  }

  return (
    <div className={ styles.group }>
      <img className={ styles.image } src={ props.photo } />
      <a className={ styles.header } href={ groupLink } target="_blank" rel="noopener">{ props.name }</a>
      <Button onClick={ onUnsubscribe }>Отписаться</Button>
    </div>
  )
}
