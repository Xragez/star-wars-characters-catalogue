import React from 'react'
import styles from './Button.module.css'


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

export default Button
