import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'


const propTypes = {
  children: PropTypes.string,
  size: PropTypes.string
}

function Title(props){
  const size = styles[props.size]
  return (
    <h1 className={`${styles.title} ${size}`}>
    {props.children}
    </h1>
  )

}

export default Title
