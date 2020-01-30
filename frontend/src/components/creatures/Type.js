import React from 'react'
import arrayFromObj from '../../hooks/arrayFromObj'

const Type = (data) => {

  return (
    <>
      <div className='dnd-section'>
        <h1>{data.data.name}</h1>
        <p className='dnd-desc'><em>{data.data.size} {data.data.type}{data.data.subtype && ` (${data.data.subtype})`}, {data.data.alignment}</em></p>
      </div>

      <div className='dnd-section'>
        <p>
          <span className='dnd-item-title'>Armour Class </span>
          {data.data.armor_class} ({data.data.armor_desc})
        </p>
        <p>
          <span className='dnd-item-title'>Hit Points </span>
          {data.data.hit_points} ({data.data.hit_dice})
        </p>
        <p><span className='dnd-item-title'>Speed </span>
          {arrayFromObj(data.data.speed).map((elem, i) => {
            return (
              <span key={i}>{(i ? ', ' : '') + `${elem.value} ft. ${elem.type}`}</span>
            )
          })}
        </p>
      </div>

    </>
  )
}

export default Type