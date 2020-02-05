import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'


const Login = (props) => {

  const [loginInfo, setLoginInfo] = useState()
  const [err, setErrors] = useState({})
  const [visible, setVisibility] = useState(false)

  //===== Get form input data
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    setErrors({})
  }

  //===== Log user in
  const handleSubmit = (e) => {
    e.preventDefault()
    //add email portion to username so my users don't have to & convert to lowercase incase of errors
    const loginFull = { ...loginInfo }
    loginFull.username = (loginFull.username + '@elorin.com').toLowerCase()
    
    axios.post('/api/login/', loginFull)
      .then((resp) => {
        Auth.setToken(resp.data.token)
        props.history.push('/monsters')
      })
      .catch((err) => {
        setErrors(err.response.data)
        setVisibility(true)
      })
  }



  return (
    <div className='login'>
      <h1>Login</h1>
      <div className='flex-container'>
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name='username' onChange={(e) => handleChange(e)} />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name='password' onChange={(e) => handleChange(e)} />
            </div>
          </div>

          {visible === true && <p className="help is-danger">Invalid username or password</p>}

          <div className="control">
            <button>Submit</button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login