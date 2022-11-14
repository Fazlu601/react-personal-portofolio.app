import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaPhp, FaLaravel, FaReact, FaDatabase, FaFigma, FaGithub, FaGit } from 'react-icons/fa'

function SkillsIcon() {
  return (
    <section className='skills-section w-90 mx-auto'>
            <h1 className='title-page text-secondary text-center mt-3 mb-2'>Skills</h1>
            <article className='skills-group'>
                <div className='row d-flex justify-content-center f-wrap'>
                    <FaFigma className='skills-icon'/>
                    <FaHtml5 className='skills-icon'/>
                    <FaCss3 className='skills-icon'/>
                    <FaJs className='skills-icon'/>
                    <FaReact className='skills-icon'/>
                    <FaPhp className='skills-icon'/>
                    <FaLaravel className='skills-icon'/>
                    <FaDatabase className='skills-icon'/>
                    <FaGit className='skills-icon'/>
                    <FaGithub className='skills-icon'/>
                </div>  
            </article>
        </section>
  )
}

export default SkillsIcon
