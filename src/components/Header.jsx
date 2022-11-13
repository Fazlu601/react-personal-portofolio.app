import React from 'react'
import { FaMailBulk, FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
        <header className='header-profile'>
                <div className='row'>
                    <aside className='header-desc'>
                        <h3 className='header-introduction'>Hi, i'm Fazlu Rachman</h3>
                        <h2 className='header-title'>Front-End Web Developer on SIB Tech4Impact</h2>
                        <p className='header-description'>
                        I’m from Indonesia and I have been working as a UI UX designer for more than 5 years. I’ve worked for a Dutch company Frisseblikken as a web designer and front-end developer for 3 years, I build my own web development team Duosweb since 2018, and currently I work for Bold Australia as UI Designer since 2020. I’ve been freelancing for the last 8 years, and right now I am looking forward to collaborate with you!
                        </p>
                        <div className='contact-group'>
                            <button type='button' className='btn-md'>
                                <FaMailBulk/>
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
                        <a className='btn-download cv'>
                            <FaDownload/>
                            <span className='caption-download'>Download CV</span>
                        </a>
                    </aside>
                    <aside className='header-img'>
                        <img src='./src/assets/image/profile4.jpeg' />
                    </aside>
                </div>
        </header>
  )
}

export default Header
