import React from 'react'

const Challenge = (data) => {

  return (
    <>
      {data.data.challenge_rating &&
        <p>
          <span className='dnd-item-title'>Challenge</span>
          <span className='title-case'>{data.data.challenge_rating}</span>
        </p>
      }
    </>
  )
}

export default Challenge

