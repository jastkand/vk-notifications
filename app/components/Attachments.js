import { get } from 'lodash'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './Attachments.css'

const AttachmentLink = ({ link }) => {
  return (
    <a href={ link.url } className={ styles.link }>
        { link.url }
    </a>
  )
}

const AttachmentVideo = ({ postLink, video }) => {
  return (
    <a href={ postLink }>
      <AttachmentVideoPreview video={ video } />
      <div className={ styles.title }>{ video.title }</div>
    </a>
  )
}

const AttachmentVideoPreview = ({ video }) => {
  let videoPreviewSrc = video.photo_640 || video.photo_800
  if (!videoPreviewSrc) {
    return null
  }

  return (
    <div className={ styles['video-preview'] }>
      <img className={ styles['preview-image'] } src={ videoPreviewSrc } />
      <div className={ styles['play-icon'] }>
        <FontAwesomeIcon icon={ faPlay } />
      </div>
    </div>
  )
}

const AttachmentPhoto = ({ photo }) => {
  const photoVariant = photo.sizes.find((size) => size.type === 'x')
  if (!photoVariant) {
    return null
  }

  return (
    <img src={ photoVariant.url } className={ styles.photo } />
  )
}

class AttachmentDoc extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: false }
  }

  onError = () => {
    this.setState({ hidden: true })
  }

  render() {
    if (this.state.hidden) {
      return null;
    }

    let video = get(this.props.doc, 'preview.video')

    if (!video) {
      return null
    }

    return (
      <video
        className={ styles['doc-preview'] }
        width={ video.width }
        height={ video.height }
        autoPlay
        loop
        src={ video.src }
        onError={ this.onError }
      />
    )
  }
}

export default class Attachments extends React.Component {
  render() {
    if (!this.props.attachments) {
      return null
    }

    let videos = []
    let photos = []
    let links = []
    let docs = []

    this.props.attachments.forEach((attachment, index) => {
      if (attachment.type == "photo") {
        photos.push(<AttachmentPhoto photo={ attachment.photo } key={ index } />)
      }
      if (attachment.type == "link") {
        links.push(<AttachmentLink link={ attachment.link } key={ index } />)
      }
      if (attachment.type == "video") {
        videos.push(<AttachmentVideo postLink={ this.props.postLink } video={ attachment.video } key={ index } />)
      }
      if (attachment.type == "doc") {
        docs.push(<AttachmentDoc doc={ attachment.doc } key={ index } />)
      }
    })

    return (
      <div className={ styles.attachments }>
        <div>{ videos }</div>
        <div>{ docs }</div>
        <div>{ photos }</div>
        <div>{ links }</div>
      </div>
    )
  }
}
