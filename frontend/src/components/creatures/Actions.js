import React from 'react'

const Actions = (data) => {

  return (

    <>
      {data.data.actions &&
        <h2>Actions</h2>
      }
      {data.data.actions &&
        data.data.actions.map((elem, i) => {
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
      {/* I have no examples of a monster with a reaction, including here just in case, if I ever find one I will test this fully */}
      {data.data.reactions &&
        <h2>Reactions</h2>
      }
      {data.data.reactions &&
        data.data.reactions.map((elem, i) => {
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

export default Actions