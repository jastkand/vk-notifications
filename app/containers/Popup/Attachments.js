import React from 'react'

class AttachmentLink extends React.Component {
  render() {
    return (
      <a href={ this.props.link.url } className="link">
        { this.props.link.url }
      </a>
    )
  }
}

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

class AttachmentDoc extends React.Component {
  render() {
    let preview = this.props.doc.preview

    if (preview && preview.video) {
      let video = preview.video

      return (
        <video className="doc-preview" width={ video.width } height={ video.height } autoplay>
          <source src={ video.src } type="video/mp4" />
        </video>
      )
    }

    return null
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
        photos.push(<img src={ attachment.photo.photo_604 } className="photo" key={ index }/>)
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
