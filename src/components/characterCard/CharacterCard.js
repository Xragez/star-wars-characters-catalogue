import React, { useState} from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'
import Character from '../character/Character'
import Details from '../details/Details'


const propTypes = {
  character: PropTypes.object.isRequired,
}

function CharacterCard(props){

  const [showDetails, setShowDetails] = useState(false)

  const switchShowDetails = () => {
    setShowDetails(!showDetails)
  }


  return (
    <Card onClick={switchShowDetails}>
      <Character {...props.character} />
      {showDetails &&
        <Details {...props.character}/>
      }
    </Card>
  )
}

CharacterCard.propTypes = propTypes

export default CharacterCard
