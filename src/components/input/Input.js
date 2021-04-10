import React from 'react'
import styles from './Input.module.css'


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

export default Input
