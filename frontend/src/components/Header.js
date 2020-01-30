import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>

      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/'>Home</Link>
          <img src='' width='112' height='28' />
        </div>

        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link to='/monsters'>Monsters</Link>
            </div>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link to='/encounter/generator'>Encounter Generator</Link>
            </div>
          </div>
        </nav>
      </nav >

    </header >
  )
}

export default Header