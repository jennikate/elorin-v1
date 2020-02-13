/* eslint-disable brace-style */
import React, { useState, useEffect } from 'react'
import calcThreshold from '../../calculators/calcThreshold'

const EncounterSuggestion = (playerArray) => {

  const [localArray, setLocalArray] = useState()

  const [easyXP, setEasyXP] = useState(0)
  const [mediumXP, setMediumXP] = useState(0)
  const [hardXP, setHardXP] = useState(0)
  const [deadlyXP, setDeadlyXP] = useState(0)

  if (!localArray) {
    console.log('waiting for data')
  } else {
    console.log('local', localArray)
    setEasyXP(calcThreshold('easy', localArray))
    setMediumXP(calcThreshold('medium', localArray))
    setHardXP(calcThreshold('hard', localArray))
    setDeadlyXP(calcThreshold('deadly', localArray))
  }

  useEffect(() => {
    setLocalArray(playerArray)
  },[])

  if (!localArray) { <h2>XP Thresholds</h2> }
  return (
    <section>
      <h2>XP Thresholds</h2>
      <p>For your party size and level, the following XP Thresholds are recommended.</p>
      <div className='flex-horizontal'>
        <div className='card'>
          <p>Easy</p>
          <p>{easyXP}</p>
        </div>
        <div className='card'>
          <p>Medium</p>
          <p>{mediumXP}</p>
        </div>
        <div className='card'>
          <p>Hard</p>
          <p>{hardXP}</p>
        </div>
        <div className='card'>
          <p>Deadly</p>
          <p>{deadlyXP}</p>
        </div>
      </div>
    </section>
  )
}

export default EncounterSuggestion