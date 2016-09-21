import React from 'react'
import classNames from 'classnames'

let cx = classNames

export default class Button extends React.Component {
  render() {
    let btnClass = cx({ btn: true }, this.props.className)
    return (
      <a onClick={ this.props.onClick } className={ btnClass }>{ this.props.children }</a>
    )
  }
}
