import React, { useState } from 'react'
import axios from 'axios'



const Register = (props) => {

  const [registerInfo, setRegisterInfo] = useState({})
  const [err, setErrors] = useState({})

  //===== Update form info to state
  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
    setErrors({})
  }

  //===== Create registration
  const handleSubmit = (e) => {
    e.preventDefault()
    const registerFull = { ...registerInfo }
    registerFull.username = registerFull.email
    registerFull.email = (registerFull.email + '@elorin.com').toLowerCase()
    console.log(registerFull)
    axios.post('/api/register', registerFull)
      .then(() => props.history.push('/login'))
      .catch((err) => {
        setErrors(err.response.data)
      })
  }


  return (
    <div className='register'>
      <h1>Register</h1>
      <div className='flex-container'>
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name='email' onChange={(e) => handleChange(e)} />
              {err.username && <p className="help is-danger">{err.username[0]}</p>}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name='password' onChange={(e) => handleChange(e)} />
              {err.password && <p className="help is-danger">{err.password[0]}</p>}
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className="input" type="password" name='password_confirmation' onChange={(e) => handleChange(e)} />
              {err.password_confirmation && <p className="help is-danger">{err.password_confirmation[0]}</p>}
            </div>
          </div>

          

          <div className="control">
            <button>Submit</button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Register