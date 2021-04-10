import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.css'


const propTypes = {
  children: PropTypes.any,
  weight: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string
}

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

Text.propTypes = propTypes

export default Text;
