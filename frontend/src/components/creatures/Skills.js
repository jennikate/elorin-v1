import React from 'react'
import arrayFromObj from '../../hooks/arrayFromObj'

const Skills = (data) => {

  const arr = arrayFromObj(data.data.skills)

  return (

    <div>
      {arr.length > 0 &&
        <p><span className='dnd-item-title'>Skills</span>
          {arr.map((elem, i) => {
            return (
              <span key={i} className='title-case'>
                {elem.type
                  + (elem.value >= 0 ? ' +' : ' ')
                  + elem.value
                  + (i < arr.length - 1 ? ', ' : '')}
              </span>
            )
          })}
        </p>
      }
    </div>





  )
}

export default Skills

