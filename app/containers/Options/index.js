import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Button from '../../components/Button'
import AuthPanel from '../../components/AuthPanel'
import { getGroups, removeAllGroups, removeGroup, fetchGroupByUrl } from '../../storages/GroupStorage'
import { getToken } from '../../storages/SessionStorage'

class Header extends React.Component {
  render() {
    return (
      <header>
        <span>Оповещения VK</span>
        <Button onClick={ this.props.unsubscribeAll } className="right">Очистить список групп</Button>
      </header>
    )
  }
}

class Group extends React.Component {
  render() {
    let groupId = this.props.gid
    let groupLink = `https://vk.com/${this.props.screen_name}`

    return (
      <div className="item">
        <img src={ this.props.photo } />
        <a className="header" href={ groupLink } target="_blank" rel="noopener">{ this.props.name }</a>
        <Button onClick={ () => { this.props.unsubscribe(groupId) } }>Отписаться</Button>
      </div>
    )
  }
}

class NewGroupForm extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      submitting: false,
      errorMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value, errorMessage: '' })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ submitting: true })
    this.props.subscribe(this.state.value)
      .then(() => {
        this.setState({ submitting: false })
      })
      .catch((error) => {
        this.setState({ submitting: false, errorMessage: error['error'] })
      })
  }

  render() {
    let loaderClass = classNames("loader", {
      "visible": this.state.submitting
    })
    let statusClass = classNames("status", {
      "visible": !!this.state.errorMessage
    })

    return (
      <div className="item">
        <form onSubmit={ this.handleSubmit }>
          <h3>Подписаться на новую группу</h3>
          <input type="text"
                 name="pageUrl"
                 placeholder="Ссылка на группу"
                 value={ this.state.value }
                 onChange={ this.handleChange } />
          <input type="submit" value="Подписаться" className="btn" />
          <div className={ loaderClass } />
          <div className={ statusClass }>{ this.state.errorMessage }</div>
        </form>
      </div>
    )
  }
}

class GroupsContainer extends React.Component {
  render() {
    let groups = []
    Object.keys(this.props.groups).forEach((key) => {
      let groupParams = this.props.groups[key]
      let group = <Group { ...groupParams }
                         key={ groupParams['gid'] }
                         unsubscribe={ this.props.unsubscribe } />
      groups.push(group)
    })

    return (
      <div>
        <div className="option-items">
          <NewGroupForm subscribe={ this.props.subscribe } />
          { groups }
        </div>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor() {
    super()
    this.state = {
      accessToken: null,
      groups: {},
    }

    this.unsubscribeAll = this.unsubscribeAll.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.afterLogInClick = this.afterLogInClick.bind(this)
    this.afterLogOutClick = this.afterLogOutClick.bind(this)
  }

  unsubscribeAll() {
    removeAllGroups().then((groups) => {
      this.setState({ groups: groups })
    })
  }

  unsubscribe(groupId) {
    removeGroup(groupId).then((groups) => {
      this.setState({ groups: groups })
    })
  }

  subscribe(value) {
    return fetchGroupByUrl(value).then((groups) => {
      this.setState({ groups: groups })
    })
  }

  afterLogInClick() {
    // accessToken by itself is not required here. `true` means that user is signed in
    this.setState({ accessToken: true })
  }

  afterLogOutClick() {
    this.setState({ accessToken: null })
  }

  componentDidMount() {
    getToken().then((token) => {
      this.setState({ accessToken: token })
    })

    // TODO: make update of information about group on opening options page
    getGroups().then((groups) => {
      this.setState({ groups: groups })
    })
  }

  render() {
    let groups

    if (this.state.accessToken) {
      groups = <GroupsContainer groups={ this.state.groups }
                                unsubscribe={ this.unsubscribe }
                                subscribe={ this.subscribe }
               />
    }

    return (
      <div>
        <Header unsubscribeAll={ this.unsubscribeAll } />
        <div className="wrapper">
          <AuthPanel
            accessToken={ this.state.accessToken }
            afterLogInClick={ this.afterLogInClick }
            afterLogOutClick={ this.afterLogOutClick }
            hidden={ !!this.state.accessToken }
          />
          { groups }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Options />, document.getElementById('app'));
