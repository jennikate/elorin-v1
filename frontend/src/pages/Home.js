import React from 'react'
import logo from '../styles/images/Elorin_Symbol.png'

const Home = () => {

  return (
    <div className='home'>
      <div className='flex-container'>
        <h1 className='shine'>Elorin </h1>
        <img className='logo' src={logo} />
        {/* <Link to='/encounter/generator'>Encounter generator</Link>
      <Link to='/monsters'>Monster list sample</Link> */}
      </div>

      <p>A Dungeons &amp; Dragons Adventure</p>
    </div>
  )
}

export default Home
