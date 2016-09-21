import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Button from '../../components/Button'
import moment from 'moment'
import { linkify } from '../../../javascripts/helpers'
import jEmoji from 'emoji'
import $ from 'jquery'

moment.locale('ru')

class HeaderButton extends React.Component {
  render() {
    var btnClass = classNames(
      "nav-btn",
      { 'is-invisible': this.props.hidden }
    )
    var iconClass = classNames('fa', `fa-${this.props.icon}`)

    return (
      <a onClick={ this.props.onClick } className={ btnClass } title={ this.props.title }>
        <i className={ iconClass }></i>
      </a>
    )
  }
}

class Header extends React.Component {
  constructor() {
    super()

    $(document).on('click', 'a', function (e) {
      let href = $(this).attr('href')

      if (href) {
        console.log('here i am');
        chrome.tabs.create({ url: href, selected: true });
      }

      e.preventDefault();
    })

    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleWatchPostsClick = this.handleWatchPostsClick.bind(this)
    this.handleSettingsClick = this.handleSettingsClick.bind(this)
  }

  handleClearClick() {
    chrome.runtime.sendMessage({ action: "clean_up" })
  }

  handleWatchPostsClick() {
    chrome.runtime.sendMessage({ action: "watch_post", read: 'ALL' })
  }

  handleSettingsClick() {
    chrome.runtime.sendMessage({ action: "open_options_page" })
  }

  render() {
    return (
      <header className="header">
        <span className="title">Оповещения VK</span>
        <div className="pull-right">
          <HeaderButton onClick={ this.handleClearClick } icon="eraser" hidden={true} />
          <HeaderButton onClick={ this.handleWatchPostsClick } icon="check-square-o" title="Прочитать все" />
          <HeaderButton onClick={ this.handleSettingsClick } icon="cog" title="Настройки" />
        </div>
      </header>
    )
  }
}

class FeedContainer extends React.Component {
  constructor() {
    super()
    this.state = { posts: [], groups: [] }
  }

  componentDidMount() {
    chrome.runtime.sendMessage({ action: "noification_list", token: this.props.accessToken }, (response) => {
      if (response.content == 'EMPTY_GROUP_ITEMS') {
        this.setState({ posts: [], groups: [] })
      } else {
        this.setState({ posts: response.data, groups: response.groups })
      }
    })
  }

  render() {
    return <Feed posts={ this.state.posts } groups={ this.state.groups } />;
  }
}

class Feed extends React.Component {
  render() {
    let postNodes = this.props.posts.map((post) => {
      let group = this.props.groups[post.to_id]

      return group ? <Post key={ post.id } post={ post } group={ group } /> : null
    })

    return (
      <div className="post-list">
        {postNodes}
      </div>
    )
  }
}

class AuthPanel extends React.Component {
  render() {
    var button;
    if (this.props.accessToken) {
      button = <Button onClick={this.props.onLogOutClick}>Выйти</Button>
    } else {
      button = <Button onClick={this.props.onLogInClick}>Войти</Button>
    }

    return (
      <div className="actions">{ button }</div>
    )
  }
}

class Post extends React.Component {
  groupLink(screen_name, item) {
    return `https://vk.com/${screen_name}?w=wall${item.to_id}_${item.id}`
  }

  processText(content) {
    let text = content.trim().replace(/\n/g, '<br/>')
    text = linkify(text)
    text = text.replace(/\[([^\|]+)\|([^\]]+)\]/gi, '<a href="http://vk.com/$1">$2</a>')
    return jEmoji.unifiedToHTML(text)
  }

  showAttachments(attachments) {
    if (!attachments) {
      return null
    }

    let photos = []
    let links = []

    attachments.forEach((attachment, index) => {
      if (attachment.type == "photo") {
        photos.push(<img src={ attachment.photo.src } className="photo" key={ index }/>)
      }
      if (attachment.type == "link") {
        links.push(<a href={ attachment.link.url } className="link" key={ index }>{ attachment.link.url }</a>)
      }
    })

    return (
      <div className="attachments">
        <div className="photos">{ photos }</div>
        <div className="links">{ links }</div>
      </div>
    )
  }

  render() {
    let { group, post } = this.props

    return (
      <div className="item">
        <div className="group-image">
          <a href={ this.groupLink(group.screen_name, post) }>
            <img src={ group.photo } title={ group.name } />
          </a>
        </div>
        <div className="item-content">
          <div className="group-name">
            <a href={ this.groupLink(group.screen_name, post) }>{ group.name }</a>
          </div>
          <div className="text" dangerouslySetInnerHTML={{ __html: this.processText(post.text) }} />
          <div>{ this.showAttachments(post.attachments) }</div>
          <span className='datestamp'>{ moment(post.date * 1000).format('LLL') }</span>
        </div>
      </div>
    )
  }
}

class Popup extends React.Component {
  constructor() {
    super()
    this.state = {
      accessToken: null
    }

    this.handleLogInClick = this.handleLogInClick.bind(this)
    this.handleLogOutClick = this.handleLogOutClick.bind(this)
  }

  handleLogInClick() {
    chrome.runtime.sendMessage({ action: "vk_notification_auth" })
  }

  handleLogOutClick() {
    chrome.storage.local.remove('vkaccess_token')
    this.setState({ accessToken: null })
  }

  componentDidMount() {
    chrome.storage.local.get({ 'vkaccess_token': {} }, (items) => {
      this.setState({ accessToken: items.vkaccess_token })
    })
  }

  render() {
    let feed

    if (this.state.accessToken) {
      feed = <FeedContainer accessToken={this.state.accessToken} />
    }

    return (
      <div>
        <Header />
        <div className="wrapper">
          { feed }
          <AuthPanel
            accessToken={ this.state.accessToken }
            onLogInClick={ this.handleLogInClick }
            onLogOutClick={ this.handleLogOutClick }
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Popup />, document.getElementById('app'));
