import React from 'react'
import ReactDOM from 'react-dom'
import AuthPanel from '../../components/AuthPanel'
import Header from './Header'
import FeedContainer from './FeedContainer'
import { getToken } from '../../storages/SessionStorage'

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
            afterLogOutClick={ this.afterLogOutClick }
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Popup />, document.getElementById('app'));
