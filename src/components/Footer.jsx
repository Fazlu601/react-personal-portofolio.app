import React from 'react'
import { FaGithub, FaMailBulk, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
        <h3 className='mb-2'>Get in touch</h3>
        <p className='mb-2'>For business inquiry please send email to fazrlu9575@gmail.com</p>
        <div className='contact-group'>
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
    </footer>
  )
}

export default Footer
