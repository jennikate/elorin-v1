import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const MonsterList = () => {

  const data = useFetch('https://api.open5e.com/monsters/?page=1')
  const results = data.results
  
  if ( data.length === 0 ) { 
    return <h1>Loading</h1> 
  }
  return (
    <div>
      <h1>Monster List</h1>
      {results.map((monster, i) => {
        return (
          <p key={i}>  
            <Link to={`/monsters/${monster.slug}`}>{monster.name}</Link>
          </p>
        )
      })}
    </div>
  )
}

export default MonsterList
