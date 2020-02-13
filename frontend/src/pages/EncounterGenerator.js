import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import calculator from '../calculators/calcSum'
import calcThreshold from '../calculators/calcThreshold'

const encounterGenerator = () => {

  //state stores for capturing data
  const [partySameLevel, setPartySameLevel] = useState('No')
  const [partyLevel, setPartyLevel] = useState(0)
  const [partyNumbers, setPartyNumbers] = useState(0)
  const [playerArray, setPlayerArray] = useState([])

  //state stores for calculating thresholds (would like to extract this out to component but not working atm)
  const [easyXP, setEasyXP] = useState(0)
  const [mediumXP, setMediumXP] = useState(0)
  const [hardXP, setHardXP] = useState(0)
  const [deadlyXP, setDeadlyXP] = useState(0)

  const handlePartyLevelChange = (state) => {
    setPartySameLevel(state)
    //reset party numbers to 0 to ensure counts are correct -- probably a better UX in here, but I'll investigate that later
    setPartyNumbers(0)
    setPlayerArray([])
  }

  const handlePartySize = (e, symbol) => {
    e.preventDefault()
    //current player numbers, always adjust by 1 on click, + or - depending on button clicked
    const res = calculator(partyNumbers, 1, symbol)
    res <= 0 ? setPartyNumbers(0) : setPartyNumbers(res)

    if (symbol === '+') {
      const playerNumber = partyNumbers + 1
      const arr = partySameLevel === 'Yes' ? [...playerArray, { player: playerNumber, level: partyLevel }] : [...playerArray, { player: playerNumber, level: 0 }]
      setPlayerArray(arr)
    } else {
      const arr = [...playerArray]
      arr.splice(-1, 1)
      setPlayerArray(arr)
    }
  }

  const handleLevelChange = (e, id) => {
    const level = e.target.value
    const arr = [...playerArray]
    if (partySameLevel === 'Yes') {
      setPartyLevel(level)
      arr.map((players, index) => {
        arr[index].level = level
      })
      setPlayerArray(arr)
    } else {
      arr.map((players, index) => {
        if (id === players.player) {
          arr[index].level = level
        }
        setPlayerArray(arr)
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEasyXP(calcThreshold('easy', playerArray))
    setMediumXP(calcThreshold('medium', playerArray))
    setHardXP(calcThreshold('hard', playerArray))
    setDeadlyXP(calcThreshold('deadly', playerArray))
  }


  return (
    <>

      <h1>Encounter Generator</h1>

      <section className=''>
        <form className='form'>
          <h2>Party</h2>

          <div className='field' onChange={e => handlePartyLevelChange(e.target.value)}>
            <label className='label'>Are all party members the same level?</label>
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
              <button className='counter' onClick={(e) => handlePartySize(e, '-')}><FontAwesomeIcon icon={faMinus} /></button>
              <p className='counter input' type='text' name='partyCount'>{partyNumbers}</p>
              <button className='counter' onClick={(e) => handlePartySize(e, '+')}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>

          {partySameLevel === 'Yes' &&
            <div className='field'>
              <label className='label'>Party level</label>
              <input className='counter input' type='text' onChange={(e) => handleLevelChange(e)} />
            </div>}

          {partySameLevel === 'No' &&
            <div className='field'>
              <label className='label'>Player levels</label>
              {playerArray.map((ele, i) => {
                return (
                  <div key={i} className='flex-horizontal'>
                    <p>Player {ele.player}</p>
                    <input className='counter input' type='text' id={ele.player} onChange={(e) => handleLevelChange(e, ele.player)} />
                  </div>
                )
              })}
            </div>
          }

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

