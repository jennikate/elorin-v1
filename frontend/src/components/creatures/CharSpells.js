import React from 'react'

const CharSpells = (data) => {

  return (
    <div className='spells'>
      {data.data.spell_list.length !== 0 &&
        <>
          <h2>Spell List</h2>
          <ul className='my-list'>
            {data.data.spell_list.map((elem, i) => {
              return (
                <li key={i}><a href={elem} target='_blank' rel='noopener noreferrer'>
                  {elem.replace('https://api.open5e.com/spells/', '').replace('/', '').replace('-', ' ')}
                </a></li>
              )
            })}
          </ul>
        </>
      }
    </div>
  )
}

export default CharSpells
