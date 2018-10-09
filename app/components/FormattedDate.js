import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import React from 'react'
import styles from './FormattedDate.css'

export default (props) => {
  let formattedDate = format(new Date(props.date * 1000), 'D MMMM, YYYY HH:mm', { locale: ru })

  return (
    <div className={ styles.datestamp }>{ formattedDate }</div>
  )
}
