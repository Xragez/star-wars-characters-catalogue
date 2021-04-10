import React from 'react'
import styles from './Title.module.css'


function Title(props){
  const size = styles[props.size]
  return (
    <h1 className={`${styles.title} ${size}`}>
    {props.children}
    </h1>
  )

}

export default Title
