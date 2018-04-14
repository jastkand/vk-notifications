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

    let popupClass = `${styles.popup}`

    if (this.state.accessToken) {
      feed = <FeedContainer accessToken={this.state.accessToken} />
    } else {
      popupClass = `${popupClass} ${styles['popup-tiny']}`
    }

    return (
      <div className={ popupClass }>
        <PopupHeader loggedIn={ !!this.state.accessToken } />
        <div className={ styles.wrapper }>
          { feed }
          <div className={ styles['auth-wrapper'] }>
            <AuthPanel
              accessToken={ this.state.accessToken }
              afterLogOutClick={ () => this.afterLogOutClick() }
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Popup />, document.getElementById('app'));
