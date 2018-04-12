import './global'

import React from 'react'
import ReactDOM from 'react-dom'
import AuthPanel from './components/AuthPanel'
import PopupHeader from './components/PopupHeader'
import FeedContainer from './components/FeedContainer'
import { getToken } from './storages/SessionStorage'

import styles from './Popup.css'

class Popup extends React.Component {
  constructor() {
    super()
    this.state = {
      accessToken: null
    }

    this.afterLogOutClick = this.afterLogOutClick.bind(this)
  }

  afterLogOutClick() {
    this.setState({ accessToken: null })
  }

  componentDidMount() {
    getToken().then((token) => {
      this.setState({ accessToken: token })
    })
  }

  render() {
    let feed

    let wrapperClass = `${styles.wrapper}`

    if (this.state.accessToken) {
      feed = <FeedContainer accessToken={this.state.accessToken} />
    } else {
      wrapperClass = `${wrapperClass} ${styles['wrapper-tiny']}`
    }

    return (
      <div className={ styles.popup }>
        <PopupHeader />
        <div className={ wrapperClass }>
          { feed }
          <AuthPanel
            accessToken={ this.state.accessToken }
            afterLogOutClick={ this.afterLogOutClick }
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Popup />, document.getElementById('app'));
