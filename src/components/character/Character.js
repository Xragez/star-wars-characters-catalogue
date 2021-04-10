import React from 'react'
import styles from './Character.module.css'
import Text from '../text/Text'


function Character(props) {
  return(
    <div className={styles.character}>
      <Text font="Saira Extra Condensed" weight="700" className={styles.name}>
        {props.name}
      </Text>
      <Text font="Open Sans" weight="100" size="70%">
        gender:
      </Text>
      <Text font="Saira Extra Condensed" weight="700">
        {props.gender}
      </Text>
      <Text font="Open Sans" weight="100" size="70%">
        birth year:
      </Text>
      <Text font="Saira Extra Condensed" weight="700">
        {props.birth_year}
      </Text>
    </div>
  )
}

export default Character
