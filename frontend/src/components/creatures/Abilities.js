import React from 'react'

const Abilities = (data) => {

  //turn strings into consistent grammar
  function cleanString(list) {
    return list.replace(';', ',').replace('and ', '').split(', ').join(', ')
    
  }


  return (
    <div>

      {data.data.damage_vulnerabilities &&
        <p>
          <span className='dnd-item-title'>Damage Vulnerabilities</span>
          <span className='title-case'>{cleanString(data.data.damage_vulnerabilities)}</span>
        </p>
      }
      {data.data.damage_resistances &&
        <p>
          <span className='dnd-item-title'>Damage Vulnerabilities</span>
          <span className='title-case'>{cleanString(data.data.damage_resistances)}</span>
        </p>
      }
      {data.data.damage_immunities &&
        <p>
          <span className='dnd-item-title'>Damage Immunities</span>
          <span className='title-case'>{cleanString(data.data.damage_immunities)}</span>
        </p>
      }
      {data.data.condition_immunities &&
        <p>
          <span className='dnd-item-title'>Condition Immunities</span>
          <span className='title-case'>{cleanString(data.data.condition_immunities)}</span>
        </p>
      }
      {data.data.senses &&
        <p>
          <span className='dnd-item-title'>Senses</span>
          <span className='title-case'>{cleanString(data.data.senses)}</span>
        </p>
      }
    </div>

  )
}

export default Abilities
