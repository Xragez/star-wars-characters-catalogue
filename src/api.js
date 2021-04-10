import axios from 'axios'

export async function fetchData(start, stop){
  const size = stop - start
  const range = [...Array(size).keys()].map(i => i + start)
  const ret = []
   await Promise.all(range.map(async i => {
        try{
     await axios.get(`https://swapi.dev/api/people/${i}/`)
      .then(result => {
        ret.push({...result.data, id: i})
      })
    } catch(err){
      console.log(err)
    }
  }))
  return ret
}

export async function fetchFilms(){
  let ret = []
  await axios.get("https://swapi.dev/api/films/")
    .then(result => {
        ret={...result.data.results}
    })
  return ret
}

export async function searchName(term){
  let ret = []
  await axios.get(`https://swapi.dev/api/people/?search=${term}`)
    .then(result => {
        ret={...result.data.results}
    })
    console.log(ret)
  return ret
}
