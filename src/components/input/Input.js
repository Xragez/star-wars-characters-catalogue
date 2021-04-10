import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'


const propTypes = {
  onCHange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string
}

function Input(props){
  return(
    <input
      type='text'
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      placeholder={props.placeholder} 
    />
  )
}

Input.propTypes = propTypes

export default Input
