import { get } from 'lodash'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './Attachments.css'

class AttachmentLink extends React.Component {
  render() {
    return (
      <a href={ this.props.link.url } className={ styles.link }>
        { this.props.link.url }
      </a>
    )
  }
}

class AttachmentVideo extends React.Component {
  _renderVideoPreview () {
    let videoPreviewSrc = this.props.video.photo_640 || this.props.video.photo_800
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

  render () {
    return (
      <a href={ this.props.postLink }>
        { this._renderVideoPreview() }
        <div className={ styles.title }>{ this.props.video.title }</div>
      </a>
    )
  }
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
        photos.push(<img src={ attachment.photo.photo_604 } className={ styles.photo } key={ index }/>)
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
