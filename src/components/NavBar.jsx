import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaReadme, FaBook } from 'react-icons/fa'

const linkStyle = { color: 'gold' }

function NavBar() {
  return (
    <nav className='navbar'>
    <div className='nav-link'>
        <Link to='/' style={linkStyle}>
        <div className='nav-brand'>
                <img className='nav-brand-icon' src='/src/assets/profile.png' width='28' />
                <span className='nav-brand-text'>Fazlu Rachman</span>
        </div>
        </Link>
    </div>
      <div className='nav-list'>
        <NavLink to='/' className='nav-items' style={({isActive}) => (isActive ? linkStyle : undefined)} >
                <span className='nav-text'>Home</span>
                <FaHome className='nav-icon'/>
        </NavLink>
        <NavLink to='/about' className='nav-items' style={({isActive}) => (isActive ? linkStyle : undefined)}>
                <span className='nav-text'>About</span>
                <FaInfoCircle className='nav-icon' />
        </NavLink>
        <NavLink to='/skills' className='nav-items' style={({isActive}) => (isActive ? linkStyle : undefined)}>
                <span className='nav-text'>Skills</span>
                <FaReadme className='nav-icon' />
        </NavLink>
        <NavLink to='article' className='nav-items' style={({isActive}) => (isActive ? linkStyle : undefined)}>
                <span className='nav-text'>Article</span>
                <FaBook className='nav-icon' />
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
