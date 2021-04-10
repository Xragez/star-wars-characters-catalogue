import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'


const propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}

function Card(props){
  
  return (
    <div className={styles.cardContainer} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

Card.propTypes = propTypes

export default Card
