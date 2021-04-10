import React from 'react'
import styles from './Text.module.css'

function Text(props){
  const weight = props.weight
  const font = props.font
  const size = props.size
  return(
    <p 
      className={styles.text} 
      style={{fontWeight: `${weight}`, fontFamily: `${font}, sans-serif`, fontSize: `${size}`}}>
      {props.children}
    </p>
  )
}

export default Text;
