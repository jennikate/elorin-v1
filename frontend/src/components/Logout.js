// eslint-disable-next-line no-unused-vars
import React from 'react'
import Auth from '../lib/auth'
import { useHistory } from 'react-router-dom'

function Logout() {
  const history = useHistory()
  Auth.logout()
  history.push('/')

  return (
    <div></div>
  )
  
}

export default Logout