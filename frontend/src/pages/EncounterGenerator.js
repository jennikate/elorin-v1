import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import calculator from '../calculators/calcSum'

const encounterGenerator = () => {

  //state stores
  const [partySameLevel, setPartySameLevel] = useState('No')
  const [partyNumbers, setPartyNumbers] = useState(0)
  const [playerArray, setPlayerArray] = useState([])

  const handlePartyLevelChange = (state) => {
    setPartySameLevel(state)
    //reset party numbers to 0 to ensure counts are correct -- probably a better UX in here, but I'll investigate that later
    setPartyNumbers(0)
    setPlayerArray([])
  }

  const handleAddSubtract = (e, symbol) => {
    e.preventDefault()
    //current player numbers, always adjust by 1 on click, + or - depending on button clicked
    const res = calculator(partyNumbers, 1, symbol)
    res <= 0 ? setPartyNumbers(0) : setPartyNumbers(res)
    

    //if state = 'No' then we will show a 'player level' field for every party member
    if (partySameLevel === 'No') {
      if (symbol === '+') {
        const arr = [...playerArray, { player: partyNumbers, level: '' }]
        console.log(arr)
        setPlayerArray(arr)
      } else {
        const arr = [...playerArray]
        arr.splice(-1, 1)
        console.log(arr)
        setPlayerArray(arr)
      }
    }
  }


  // console.log('PartySameLevel', partySameLevel)
  // console.log('partyNumbers', partyNumbers)
  // console.log('playerArray', playerArray)

  return (
    <>

      <h1>Encounter Generator</h1>

      <section className=''>
        {/* <FormpartyData /> */}
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
              <button className='counter' onClick={(e) => handleAddSubtract(e, '-')}><FontAwesomeIcon icon={faMinus} /></button>
              <p className='counter input' type='text' name='partyCount'>{partyNumbers}</p>
              <button className='counter' onClick={(e) => handleAddSubtract(e, '+')}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>

          {partySameLevel === 'Yes' &&
            <div className='field'>
              <label className='label'>Party level</label>
              {/* <input className='counter input' type='text' id={pInput[i]} onChange={e => handleLevelChange(e)} /> */}
              <input className='counter input' type='text' />
            </div>}

          {partySameLevel === 'No' &&
            <div className='field'>
              <label className='label'>Player levels</label>
              {/* {partyNumbers.map((ele, i) => {
                return (
                  <p key={i}>{ele}</p>
                )
              })} */}
            </div>
          }

          {/* <div className='field'>
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

          <button onClick={e => handleSubmit(e)}>Calculate</button>  */}
        </form>
      </section>

      {/* <section>
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
      </section> */}


    </>
  )
}

export default encounterGenerator


// [x] ask if players are all the same level

// if all players are same level then 
// [x] take number of players via + and -
// display level input field
// on calculate 
// CALCULATOR
// (level * numPlayers) * easy / med / diff / deadly
// return results

// after calculate
// if number of players changes AND all players remain same level then
// on calculate
// CALCULATOR
// update numPlaters
// (level * numPlayers) * easy / med / diff / deadly 
// return results

// all players changes to be different levels
// refresh numPlayers to 0
// refresh level to 0
// leave different level selected

// if all players are different level then
// take number of players via + and -
// for each +
// add 1 to numPlayers
// show input form for level for player[n]
// for each - 
// remove 1 from numPlayers
// hide the last input
// clear any value from the last input
// on calculate
// CALCULATOR
// for each player
// get charLevel
// easyValue = easyXP + easyValue (repeat for med, diff, deadly)
// return results


// TRICKY THINGS
// one calculation is pure *, the other is find level and +
// once a user has calculated, can they add more & recalculate - how do I handle that

