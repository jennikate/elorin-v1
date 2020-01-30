import React from 'react'

const CoreStats = (data) => {

  //round down (stat - 10 ) / 2
  function statModifier(stat) {
    return (Math.floor((stat - 10) / 2) >= 0) ? '+' + Math.floor((stat - 10) / 2) : Math.floor((stat - 10) / 2)
  }

  return (
    <div className='dnd-section'>
      <ul className='dnd-core-stats flex-horizontal'>
        <li>
          <p className='dnd-item-title'>STR </p>
          <p>{data.data.strength} ({statModifier(data.data.strength)})</p>
        </li>
        <li>
          <p className='dnd-item-title'>DEX </p>
          <p>{data.data.dexterity} ({statModifier(data.data.dexterity)})</p>
        </li>
        <li>
          <p className='dnd-item-title'>CON </p>
          <p>{data.data.constitution} ({statModifier(data.data.constitution)})</p>
        </li>
        <li>
          <p className='dnd-item-title'>INT </p>
          <p>{data.data.intelligence} ({statModifier(data.data.intelligence)})</p>
        </li>
        <li>
          <p className='dnd-item-title'>WIS </p>
          <p>{data.data.wisdom} ({statModifier(data.data.wisdom)})</p>
        </li>
        <li>
          <p className='dnd-item-title'>CHA </p>
          <p>{data.data.charisma} ({statModifier(data.data.charisma)})</p>
        </li>
      </ul>
    </div>
  )
}


export default CoreStats
