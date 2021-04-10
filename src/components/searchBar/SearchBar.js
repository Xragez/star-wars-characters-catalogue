import React, { useState } from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import styles from './SearchBar.module.css'


function SearchBar(props){
  const [term, setTerm] = useState('')

  const search = () =>{
    props.onSearch(term)
  }

  return(
    <div className={styles.searchBarContainer}>
      <Input 
        value={term} 
        onChange={e => setTerm(e.target.value)}
        onKeyDown={e=> e.key === 'Enter' && search()} 
        placeholder="search..."/>
      <Button message="Search by name" onClick={search}></Button>
    </div>
  )
}

export default SearchBar
