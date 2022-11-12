import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaReadme, FaBook } from 'react-icons/fa'

const linkStyle = { textDecoration: 'none', width:'100%' }

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-brand'>
        Fazlu Rachman
      </div>
      <ul className='nav-list'>
        <Link to='/' style={linkStyle}>
            <li className='nav-items'>
                <span className='nav-text'>Home</span>
                <FaHome className='nav-icon'/>
            </li>
        </Link>
        <Link to='/about' style={linkStyle}>
            <li className='nav-items'>
                <span className='nav-text'>About</span>
                <FaInfoCircle className='nav-icon' />
            </li>
        </Link>
        <Link to='/skills' style={linkStyle}>
            <li className='nav-items'>
                <span className='nav-text'>Skills</span>
                <FaReadme className='nav-icon' />
            </li>
        </Link>
        <Link to='article' style={linkStyle}>
            <li className='nav-items'>
                <span className='nav-text'>Article</span>
                <FaBook className='nav-icon' />
            </li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
