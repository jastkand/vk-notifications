import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'

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

export default class Header extends React.Component {
  constructor() {
    super()

    $(document).on('click', 'a', function (e) {
      let href = $(this).attr('href')

      if (href) {
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
