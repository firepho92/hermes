import { AuthenticationContext } from '../context/AuthenticationContext'
import React, { useContext, useState } from 'react'

const Header = () => {
  const { user } = useContext(AuthenticationContext)
  
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Navbar</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <div className='nav-link active' aria-current='page'>Home</div>
            <div className='nav-link' onClick={() => console.log(user)}>Features</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header