import React from 'react'

const Legendary = (data) => {

  return (
    <>
      {data.data.legendary_actions &&
        <h2>Legendary Actions</h2>
      }
      {data.data.legendary_actions &&
        data.data.legendary_actions.map((elem, i) => {
          return (
            <p key={i} className='dnd-desc'><em className='dnd-item-title'>{elem.name}</em>
              {elem.desc}
              {/* 
              these are blended into the description above, if I want to pull them out for styling I have to manipulate the string from desc
              {elem.attack_bonus && <span>{elem.attack_bonus} to hit</span>}
              {elem.damage_dice && <span><em>Hit</em>: {elem.damage_dice}</span>}
              {elem.damage_bonus && <span>Damage bonus: {elem.damage_bonus}</span>} */}
            </p>
          )
        })
      }
    </>
  )
}

export default Legendary
