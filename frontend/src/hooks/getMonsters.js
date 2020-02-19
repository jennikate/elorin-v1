import React from 'react'
import useFetch from './useFetch'


function MonsterList(maxCR) {

  const challengeRatingArr = []

  while ( maxCR !== 0 ) {
    challengeRatingArr.push(maxCR)
    maxCR = maxCR - 1
  }

  console.log(challengeRatingArr)

  // const data = useFetch('https://api.open5e.com/monsters/?challenge_rating=3')
  // const results = data.results
  
  // if ( data.length === 0 ) { 
  //   return <h1>Loading</h1> 
  // }
  // return (
  //   <div>
  //     <h1>Monster List</h1>
  //     {results.map((monster, i) => {
  //       return (
  //         <p key={i}>  
  //           <Link to={`/monsters/${monster.slug}`}>{monster.name}</Link>
  //         </p>
  //       )
  //     })}
  //   </div>
  // )
}

export default MonsterList
