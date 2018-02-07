import React from 'react'
import PropTypes from 'prop-types'
import { text } from './styles.css'

Logout.propTypes = {
  
}

export default function Logout (props) {
  return (
    <div className={text}>{'You are now logged out'}</div>
  )
}