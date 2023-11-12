import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Aini from '../assets/aini.jpg'
import Jordi from '../assets/jordi.jpg'
import Project from '../assets/skilMovie.png'
import Bangkit from '../assets/screenShoot.png'
import Toko from '../assets/bab1.png'

function ProjectGroup() {
  return (
        <section className='project-section mt-3'>
        <h1 className='title-page text-secondary text-center mt-3 mb-2'>My Project</h1>
        <article className='project-group bg-crimson w-80 p-3 mx-auto'>
            <div className='row d-flex justify-content-between flex-column-reverse'>
                <aside className='project-group-desc text-secondary'>
                <h3 className='project-group-title '>Group Project</h3>
                <p className='project-group-description'>In this project, my team and I create a digital product based on the challenge partner's problems. Namely making product innovations that can help the community in dealing with the COVID-19 pandemic.....</p>
                <a href='https://github.com/FE-20-Group-Project/React-Bangkit.app' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
                <aside className='project-group-img'>
                <img className='bangkit' src={Bangkit} />
                </aside>
            </div>
        </article>
        <article className='project-group w-80 w-sm-100 p-3 mx-auto'>
                <h3 className='project-group-title text-secondary'>Freelance & Research Project</h3>
            <div className='row d-flex justify-content-between flex-column mb-3'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={Aini} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                My Research Project Assignment :
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
            <div className='row d-flex justify-content-between flex-column mb-3'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={Jordi} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                Software Engineering Final Assignment :
                    <ul className='list-group'>
                        <li className='list'>Build with PHP & Codeigniter 3 Framework</li>
                    </ul>
                </div>
                <a href='https://github.com/Fazlu601/Tugas-Akhir-RPL-Ecommerce-JordiVariasi' target='_blank'>
                <button className='w-60 w-sm-100 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> Detail Repositories</button>
                </a>
                </aside>
            </div>
            <div className='row d-flex justify-content-between flex-column'>
                <aside className='project-group-img mb-sm-3 p-1'>
                <img src={Toko} />
                </aside>
                <aside className='project-group-desc text-secondary'>
                <div className='project-group-description'>
                Project Freelance E-Commerce :
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
        </article>
        <article className='project-group bg-crimson p-3 mx-auto'>
            <div className='row d-flex justify-content-around flex-column'>
                <aside className='project-group-desc text-sm-center text-secondary mb-sm-3'>
                <h3 className='project-group-title '>All Project</h3>
                <p className='project-group-description'>You can see more of my projects on github via the following button</p>
                <a href='https://github.com/Fazlu601?tab=repositories' target='_blank'>
                <button className='w-60 bn5 mt-3 p-1 fs-3'><FaGithub className='me-1'/> View on GithHub...</button>
                </a>
                </aside>
                <aside className='project-group-img'>
                <img src={Project} />
                </aside>
            </div>
        </article>
    </section>
  )
}

export default ProjectGroup
