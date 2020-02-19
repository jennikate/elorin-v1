import React, { useState } from 'react'
import useFetch from './useFetch'


const MonsterList = (xpThreshold) => {

  const xpValue = parseInt(Object.values(xpThreshold))
  const [challengeRating, setChallengeRating] = useState()

  //get max challenge rating from my databse
  setChallengeRating(useFetch('/api/challenge/'))



  console.log(xpValue)
  console.log(challengeRating)

  // const data = useFetch('https://api.open5e.com/monsters/?challenge_rating=3')
  // const results = data.results
  
  //return results to EncounterGenerator
}

export default MonsterList
