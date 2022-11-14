import React from 'react'
import { FaMailBulk, FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Profil from '../assets/profile4.jpeg'

function Header() {
  return (
        <header className='header-profile pb-2'>
                <div className='row'>
                    <aside className='header-desc'>
                        <h3 className='header-introduction'>Hi, i'm Fazlu Rachman</h3>
                        <h2 className='header-title'>Front-End Web Developer at SIB Tech4Impact</h2>
                        <p className='header-description'>
                        I’m from Indonesia and I am a student majoring in information systems who are interested and want to learn many things about programming, especially in web development. I feel this is the right passion for me, and I will continue to study as best as I can to pursue the career I dream of.
                        </p>
                        <div className='contact-group'>
                            <button type='button' className='btn-md'>
                                <FaMailBulk className='me-1'/>
                                Email Me
                            </button>
                            <aside className='social-group'>
                                <a href='https://github.com/Fazlu601' target='_blank'>
                                <FaGithub className='social-icon' />
                                </a>
                                <a href='https://www.linkedin.com/in/fazlu-rachman-aaa35b245/' target='_blank' >
                                <FaLinkedin className='social-icon' />
                                </a>
                                <a href='https://www.instagram.com/fz_rchman06' target='_blank'>
                                <FaInstagram className='social-icon' />
                                </a>
                            </aside>
                        </div>
                        {/* <a className='btn-download cv'>
                            <FaDownload/>
                            <span className='caption-download'>Download CV</span>
                        </a> */}
                    </aside>
                    <aside className='header-img'>
                        <img src={Profil} />
                    </aside>
                </div>
        </header>
  )
}

export default Header
