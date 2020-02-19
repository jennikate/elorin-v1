import React from 'react'
import useFetch from './useFetch'


function MonsterList(xpThreshold) {

  const xpValue = parseInt(Object.values(xpThreshold))

  //get max challenge rating from my databse

  console.log(xpValue)

  // const data = useFetch('https://api.open5e.com/monsters/?challenge_rating=3')
  // const results = data.results
  
  //return results to EncounterGenerator
}

export default MonsterList
