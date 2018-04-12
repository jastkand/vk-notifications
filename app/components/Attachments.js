import { get } from 'lodash'
import React from 'react'
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
  render() {
    let videoPreviewSrc = this.props.video.photo_640 || this.props.video.photo_800

    return (
      <a className={ styles.video } href={ this.props.postLink }>
        <div className={ styles['video-preview'] }>
          <img className={ styles['preview-image'] } src={ videoPreviewSrc } />
          <div className={ styles['play-icon'] }>
            <i className="fa fa-play" />
          </div>
        </div>
        <div className={ styles.title }>{ this.props.video.title }</div>
      </a>
    )
  }
}

class AttachmentDoc extends React.Component {
  render() {
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
      <div className="attachments">
        <div className="videos">{ videos }</div>
        <div className="docs">{ docs }</div>
        <div className="photos">{ photos }</div>
        <div className="links">{ links }</div>
      </div>
    )
  }
}
