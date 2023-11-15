import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaPhp, FaLaravel, FaReact, FaDatabase, FaFigma, FaGithub, FaGit } from 'react-icons/fa'

function SkillsIcon() {
  return (
    <section className='skills-section w-90 mx-auto'>
            <h1 data-aos="zoom-in-right" className='title-page text-secondary text-center mt-3 mb-2'>Skills</h1>
            <article className='skills-group'>
                <div className='row d-flex justify-content-center f-wrap'>
                <div data-aos="zoom-in" >             
                <FaFigma className='skills-icon'/>
              </div>
              <div data-aos="zoom-in" >
                <FaHtml5 className='skills-icon'/>
              </div>
              <div data-aos="zoom-in" >
                <FaCss3 className='skills-icon'/>
              </div>
              <div data-aos="zoom-in" >
                <FaJs className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaReact className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaPhp className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaLaravel className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaDatabase className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaGit className='skills-icon'/>
              </div>
              <div data-aos="zoom-in">
                <FaGithub className='skills-icon'/>
              </div>

                </div>  
        </article>
        </section>
  )
}

export default SkillsIcon
