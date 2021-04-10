import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'


const propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

function Button(props){
  const message = props.message
  return (
    <button 
      className={styles.button}
      onClick={props.onClick}
    >
      {message}
    </button>
  )
}

Button.propTypes = propTypes

export default Button
