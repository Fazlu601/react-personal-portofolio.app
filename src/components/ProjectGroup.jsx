import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Bangkit from '../assets/screenShoot.png'
import Aini from '../assets/aini.jpg'
import CV from '../assets/osm.jpg'
import SPP from '../assets/spp.jpg'
import Toko from '../assets/bab1.png'
import Project from '../assets/skilMovie.png'

function ProjectGroup() {
  return (
        <section className='project-section mt-3'>
        <h1 data-aos="zoom-in-left" className='title-page text-secondary text-center mt-3 mb-2'>My Project</h1>
        <article className='project-group bg-crimson w-80 p-3 mx-auto'>
            <div data-aos="zoom-in" className='row d-flex justify-content-between flex-column-reverse'>
                <aside className='project-group-desc text-secondary'>
                <h3 className='project-group-title '>Group Project</h3>
                <p className='project-group-description'>In this project, our team and I are developing a digital product tailored to address the challenges faced by our partner in the context of the COVID-19 pandemic. Our focus is on creating innovative solutions that can benefit the community.
                    <ul className='list-group'>
                            <li className='list'>Build with React JS for a responsive user interface and Express JS as a server framework.</li>
                            <li className='list'>Using Socket.io for a dynamic live chat forum</li>
                    </ul>
                </p>   
                <a href='https://github.com/FE-20-Group-Project/Bangkit-app' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
                <aside className='project-group-img'>
                <img className='bangkit' src={Bangkit} />
                </aside>
            </div>
        </article>
        <article className='project-group w-80 w-sm-100 p-3 mx-auto'>
                <h3 data-aos="zoom-in-right" className='project-group-title text-secondary'>Freelance & Research Project</h3>
            <div data-aos="zoom-in-right" className='row d-flex justify-content-between flex-column mb-3'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={Aini} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                My Research Project Assignment, Reservation Room :
                    <ul className='list-group'>
                        <li className='list'>Build with PHP & Laravel 8 Framework</li>
                        <li className='list'>End to end system with library transaction Midtrans Payment Gateway</li>
                    </ul>
                </div>
                <a href='https://github.com/Fazlu601/proyek-penelitian-reservasi-hotel-grand-aini-jambi' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
            </div>
            <div data-aos="zoom-in-left" className='row d-flex justify-content-between flex-column'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={Toko} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                Project Freelance, E-Commerce :
                    <ul className='list-group'>
                        <li className='list'>Build with PHP & Laravel 10 Framework</li>
                        <li className='list'>Using Raja Ongkir API for delivery support</li>
                        <li className='list'>End to end system with library transaction Midtrans Payment Gateway</li>
                    </ul>
                </div>
                <a href='https://github.com/Fazlu601/linda-fashion-app' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
            </div>
            <div data-aos="zoom-in-right" className='row d-flex justify-content-between flex-column'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={CV} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                Project Freelance, Data Management :
                    <ul className='list-group'>
                        <li className='list'>Build with PHP & Laravel 10 Framework</li>
                    </ul>
                </div>
                <a href='https://github.com/Fazlu601/cv-osmanjami-app' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
            </div>
            <div data-aos="zoom-in-left" className='row d-flex justify-content-between flex-column'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={SPP} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                Project Freelance, SPP :
                    <ul className='list-group'>
                        <li className='list'>Build with PHP & Laravel 10 Framework</li>
                        <li className='list'>With 2 Point of View user Admin & Student</li>
                    </ul>
                </div>
                <a href='https://github.com/Fazlu601/spp-muhammadiyah-app' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
            </div>
        </article>
        <article className='project-group bg-crimson p-3 mx-auto'>
            <div className='row d-flex justify-content-around flex-column'>
                <aside data-aos="zoom-in-right" className='project-group-desc text-sm-center text-secondary mb-sm-3'>
                <h3 className='project-group-title '>All Project</h3>
                <p className='project-group-description'>You can see more of my projects on github via the following button</p>
                <a href='https://github.com/Fazlu601?tab=repositories' target='_blank'>
                <button className='w-60 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> View on GithHub...</button>
                </a>
                </aside>
                <aside data-aos="zoom-in-left" className='project-group-img'>
                <img src={Project} />
                </aside>
            </div>
        </article>
    </section>
  )
}

export default ProjectGroup
