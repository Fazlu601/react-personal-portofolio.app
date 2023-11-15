import React from 'react'
import { FaMailBulk, FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Profil from '../assets/profile5.png'

function Header() {
    const redirectToEmail = () => {
        const email = 'fazrlu9585@gmail.com'; // Ganti dengan alamat email tujuan Anda
        const subject = 'Subjek Pesan';
        const body = 'Isi pesan dapat ditambahkan di sini.';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
      };

  return (
        <header className='header-profile pb-2' id='home'>
                <div className='row'>
                    <aside data-aos="fade-right" className='header-desc'>
                        <h3 className='header-introduction'>Hi, i'm Fazlu Rachman</h3>
                        <h2 className='header-title'>Junior Full Stack Web Developer</h2>
                        <p className='header-description'>
                        I am a recent graduate who is passionate about programming, particularly in the field of web development. I have learned a lot of fundamentals, including HTML, CSS, JavaScript, and PHP, as well as several frameworks like React JS and Laravel. I also have experience working on projects both individually and in teams.
                        </p>
                        <div className='contact-group'>
                            <button type='button' onClick={() => redirectToEmail()} className='btn-md'>
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
                        <a href='https://drive.google.com/file/d/1RDQQdSGUrA50zeiF6nEcyHSh-2hcPtfb/view?usp=sharing' target='_blank' className='btn-download cv'>
                            <FaDownload/>
                            <span className='caption-download'>Download CV</span>
                        </a>
                    </aside>
                    <aside data-aos="zoom-in" className='header-img'>
                        <img src={Profil} />
                    </aside>
                </div>
        </header>
  )
}

export default Header
