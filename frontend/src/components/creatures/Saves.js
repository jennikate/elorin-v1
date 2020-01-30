import React, { useState, useEffect } from 'react'


const Saves = (data) => {

  const [saves, setSaves] = useState([])

  useEffect(() => {
    setSaves(data.data.filter(elem => {
      return elem.key.includes('_save')
    }))
  }, [data])

  return (
    <div>
      <p><span className='dnd-item-title'>Saving Throws</span>
        {saves.map((elem, i) => {
          return (
            elem.value &&
            <span key={i} className='title-case'>
              {elem.key.replace('_', ' ').substring(0, 3)
                + (elem.value >= 0 ? ' +' : ' ')
                + elem.value
                + (i < saves.length - 1 ? ', ' : '')}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default Saves