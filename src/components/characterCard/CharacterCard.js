import React, { useState} from 'react'
import Card from '../card/Card'
import Character from '../character/Character'
import Details from '../details/Details'


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

export default CharacterCard
