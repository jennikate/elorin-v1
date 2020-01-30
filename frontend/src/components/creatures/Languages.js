import React from 'react'

const Languages = (data) => {

  return (
    <>
      {data.data.languages &&
        <p>
          <span className='dnd-item-title'>Languages</span>
          <span className='title-case'>{data.data.languages}</span>
        </p>
      }
    </>
  )
}

export default Languages

