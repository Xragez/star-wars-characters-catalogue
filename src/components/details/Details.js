import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text/Text'
import styles from './Details.module.css'


const propTypes = {
  films: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired
}

function Details(props){

  const films = props.films
  return (
    <>
      <div className={styles.height}>
        <div className={styles.text}>
          <Text font="Open Sans" weight="100" size="70%" >
            height: 
          </Text>
        </div>
        <Text font="Saira Extra Condensed" weight="700">
          {props.height}cm
        </Text>
      </div>
      <div className={styles.films}>
        <Text font="Open Sans" weight="100" size="70%">
          Films:
        </Text>
        <div className={styles.text}>
          {films.map(film => 
            <Text font="Saira Extra Condensed" weight="700" key={film.episode_id}>
              {film.title}
            </Text>
          )}
        </div>
      </div>
    </>
  )
}

Details.propTypes = propTypes

export default Details
