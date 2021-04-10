import React, { useState, useEffect, useRef }  from 'react'
import Title from '../title/Title'
import Button from '../button/Button'
import Text from '../text/Text'
import SearchBar from '../searchBar/SearchBar'
import CharacterCard from '../characterCard/CharacterCard'
import styles from './List.module.css'
import { fetchData, fetchFilms, searchName } from '../../api'


let start = 1

function List (){
  
  const filmsRef = useRef(null)
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)

  const loadMore = async () => {
    await addCharacters(start, start += 5)
  }

  const addFilms = (characters) =>{
    let temp = []
    for( let [, char] of Object.entries(characters)){
      for(let [, film] of Object.entries(char.films)){
        for( let[, f] of Object.entries(filmsRef.current)){
          if(film === f.url){
            temp.push(f)
          }
        }
      }
      char.films = temp
      temp = []
    }
  }

  const addCharacters = async (start, stop) => {
    setLoading(true)
    const newCharacters = await fetchData(start, stop)
    addFilms(newCharacters)
    setCharacters(characters.concat(newCharacters))
    setLoading(false)
  }

  const searchHandler = async (term) => {
    setLoading(true)
    setSearching(!(term === ''))
    const newCharacters = await searchName(term)
    addFilms(newCharacters)
    setCharacters(Object.values(newCharacters))
    setLoading(false)
  }

  useEffect(() => {
    const initCharacters = async () =>{
      filmsRef.current = await fetchFilms()
      addCharacters(start, start += 10)
    }
    initCharacters()
    
  },[])

  return (
    <div className={styles.listContainer}>
      <Title size='small'>List of characters:</Title>
      <SearchBar onSearch={(term) => searchHandler(term)}/>
      <div className={styles.list}>
        {characters.map(character => 
          <CharacterCard key={character.id} character={character}/>
        )}
        {loading && (
          <Text font="Saira Extra Condensed" weight="700">Loading...</Text>
        )}
      </div>
      { !loading && !searching && (
      <Button message="Load more" onClick={loadMore}></Button>
      )}
    </div>
  )
}

export default List
