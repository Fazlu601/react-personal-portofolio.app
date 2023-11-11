import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaReadme, FaBook } from 'react-icons/fa'
import NavIcon from '../assets/profile.png'

const linkStyle = { color: 'gold' }

function NavBar() {
  return (
    <nav className='navbar'>
    <div className='nav-link'>
        <div className='nav-brand'>
                <img className='nav-brand-icon' src={NavIcon} width='28' />
                <span className='nav-brand-text'>Fazlu Rachman</span>
        </div>
    </div>
      <div className='nav-list'>
        <a href='#home' className='nav-items' >
                <span className='nav-text'>Home</span>
                <FaHome className='nav-icon'/>
        </a>
        <a href='#skills' className='nav-items'>
                <span className='nav-text'>Skills</span>
                <FaReadme className='nav-icon' />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
