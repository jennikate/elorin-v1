/* eslint-disable brace-style */
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import calcThreshold from '../calculators/calcThreshold'
// import FormPlayerData from '../Forms/FormPlayerData'

const encounterGenerator = () => {

  const [easyXP, setEasyXP] = useState(0)
  const [mediumXP, setMediumXP] = useState(0)
  const [hardXP, setHardXP] = useState(0)
  const [deadlyXP, setDeadlyXP] = useState(0)

  const [pNum, setPNum] = useState(0)
  const [pInput, setPInput] = useState([])  //used to create input fields to take player leve
  const [pSameLevel, setPSameLevel] = useState('No')
  const [pLevels, setPLevels] = useState([])

  const setPlayerLevelStatus = (e) => {
    setPSameLevel(e.target.value)
    //clear any existing player data
    setPInput([])
    setPLevels([])
    setPNum(0)
  }

  const handleAddSubtract = (e, operator) => {
    e.preventDefault()
    //if user clicks add, increase the number of players (pNum) 
    if (operator === 'add') {
      setPNum(pNum + 1)
      //and if they have stated that all players are not the same level, then add an input field for each players level (pInput)
      if (pSameLevel === 'No') { setPInput([...pInput, 'Player ' + (pNum + 1)]) }
      //if user clicks subtract
    } else if (operator === 'subtract') {
      //reduce the number of players
      setPNum(pNum - 1)
      //remove the level from level array if it exists
      pLevels.splice(-1)[0]
      //and if they have stated that all players are not the same level, then remove an input field, and remove the level from the levels array
      if (pSameLevel === 'No') {
        pInput.pop()  //remove the input field (always just drops last field)
      }
    }
  }

  const handleLevelChange = (e) => {
    const newArr = []
    if (pSameLevel === 'Yes') {
      for (let i = 0; i < pNum; i++) {
        // newArr.push(e.target.value) //if all players are same level is YES, then loops through number of players creating an array of levels for them
        newArr.push(
          {
            name: `Player ${i}`,
            value: e.target.value
          }
        )
        setPLevels(newArr)
      }
    } else { //if all players are same level is NO, this takes the levels as entered and adds to array
      setPLevels([...pLevels,
        {
          name: e.target.id,
          value: e.target.value
        }
      ])
    }
  }

  const handleSubmit = (e) => {

    if (pLevels.length !== pNum) {
      console.log('arg')
    }
    const arr = pLevels.map(level => level.value)

    e.preventDefault()
    setEasyXP(calcThreshold('easy', arr))
    setMediumXP(calcThreshold('medium', arr))
    setHardXP(calcThreshold('hard', arr))
    setDeadlyXP(calcThreshold('deadly', arr))
  }


  return (
    <>

      <h1>Encounter Generator</h1>

      <section className=''>
        {/* <FormPlayerData /> */}
        <form className='form'>
          <h2>Players</h2>

          <div className='field' onChange={e => setPlayerLevelStatus(e)}>
            <label className='label'>Are all players the same level?</label>
            <label className='radio-container'>Yes
              <input type='radio' name='radio' value='Yes' />
              <span className='checkmark'></span>
            </label>
            <label className='radio-container'>No
              <input type='radio' name='radio' value='No' defaultChecked />
              <span className='checkmark'></span>
            </label>
          </div>

          <div className='field'>
            <label className='label'>Number of players</label>
            <div className='flex-horizontal'>
              <button className='counter' onClick={(e) => handleAddSubtract(e, 'subtract')}><FontAwesomeIcon icon={faMinus} /></button>
              <p className='counter input' type='text' name='playerCount'>{pNum}</p>
              <button className='counter' onClick={(e) => handleAddSubtract(e, 'add')}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>

          <div className='field'>
            <label className='label'>Player level</label>
            {(pSameLevel === 'No' && pInput) &&
              pInput.map((elem, i) => {
                return (
                  <div key={i} className='flex-horizontal'>
                    <p>Player level:{pInput[i]}</p>
                    <input className='counter input' type='text' id={pInput[i]} onChange={e => handleLevelChange(e)} />
                  </div>
                )
              })
            }
            {(pSameLevel === 'Yes') &&
              <div className='flex-horizontal'>
                <p>Players level:</p>
                <input className='counter input' type='text' onChange={e => handleLevelChange(e)} />
              </div>
            }
          </div>

          <button onClick={e => handleSubmit(e)}>Calculate</button>
        </form>
      </section>

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


    </>
  )
}

export default encounterGenerator

{/* <p>Mode: Medium (note, will get this from the form)</p>
      <p>XP Threshold for monster selection : {formResult}</p>
      <p>You can consider monsters up to CR level : {crMax}</p> */}