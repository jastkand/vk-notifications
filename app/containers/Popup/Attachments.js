import React from 'react'

class AttachmentVideo extends React.Component {
  render() {
    let videoPreviewSrc = this.props.video.photo_640 || this.props.video.photo_800

    return (
      <a className="video" href={ this.props.postLink }>
        <div className="preview">
          <img src={ videoPreviewSrc } />
          <div className="play-icon">
            <i className="fa fa-play" />
          </div>
        </div>
        <div className="title">{ this.props.video.title }</div>
      </a>
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

    this.props.attachments.forEach((attachment, index) => {
      if (attachment.type == "photo") {
        photos.push(<img src={ attachment.photo.photo_604 } className="photo" key={ index }/>)
      }
      if (attachment.type == "link") {
        links.push(<a href={ attachment.link.url } className="link" key={ index }>{ attachment.link.url }</a>)
      }
      if (attachment.type == "video") {
        videos.push(<AttachmentVideo postLink={ this.props.postLink } video= { attachment.video } key={ index } />)
      }
    })

    return (
      <div className="attachments">
        <div className="videos">{ videos }</div>
        <div className="photos">{ photos }</div>
        <div className="links">{ links }</div>
      </div>
    )
  }
}
