import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from './NewGroupForm.css'
import btnStyles from './Button.css'

const Loader = (props) => {
  if (!props.active) {
    return null
  }

  return (
    <div className={ styles.loader }>
      <FontAwesomeIcon icon={ faSpinner } size="lg" spin />
    </div>
  )
}

export default class NewGroupForm extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      submitting: false,
      errorMessage: ''
    }
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
    return (
      <div className={ styles.form }>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <h3>Подписаться на новую группу</h3>
          <input type="text"
                 name="pageUrl"
                 placeholder="Ссылка на группу"
                 className={ styles.input }
                 value={ this.state.value }
                 onChange={ (e) => this.handleChange(e) } />
          <input type="submit" value="Подписаться" className={ btnStyles.btn } />
          <Loader active={ this.state.submitting } />
          { (!!this.state.errorMessage ? <div className={ styles.status }>{ this.state.errorMessage }</div> : null) }
        </form>
      </div>
    )
  }
}
