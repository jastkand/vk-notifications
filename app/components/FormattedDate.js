import moment from 'moment'
import 'moment/locale/ru'
import React from 'react'
import styles from './FormattedDate.css'

export default class FormattedDate extends React.Component {
  componentWillMount () {
    moment.locale('ru')
  }

  render () {
    return (
      <div className={ styles.datestamp }>{ moment(this.props.date * 1000).format('LLL') }</div>
    )
  }
}
