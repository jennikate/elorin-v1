import React from 'react'

const SpecialAbilities = (data) => {


  return (
    <>
      {data.data.special_abilities &&
        data.data.special_abilities.map((elem, i) => {
          return (
            <div key={i} className='dnd-desc'><em className='dnd-item-title'>{elem.name}</em>
              {elem.desc.split('\n').map((elem, i) => {
                return i === 0 ? <span className='dnd-card-list' key={i}>{elem}</span> : <p key={i}>{(elem)}</p>
              })}
            </div>
          )
        })
      }
    </>
  )
}

export default SpecialAbilities
