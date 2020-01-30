import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>Welcome to Elorin!</h1>
      <Link to='/encounter/generator'>Encounter generator</Link>
      <Link to='/monsters'>Monster list sample</Link>
    </div>
  )
}

export default Home
