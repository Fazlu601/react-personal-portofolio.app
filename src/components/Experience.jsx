import React from 'react'
import Msib from '../assets/msib.png'
import Skilvul from '../assets/skilvul.png'
import KampusMerdeka from '../assets/kampusMerdeka.png'

function Experience() {
  return (
    <article className='about-experience p-3'>
        <h1 className='text-center title-page text-secondary mt-3 mb-2'>Experience</h1>
        <ul className='list-group text-secondary '>
            <li className='list-img text-center'>
                <img src={Skilvul}/>
                <img src={Msib} />
                <img src={KampusMerdeka} />
            </li>
            <li>SIB (Studi Independen Bersertifikat) Kampus Merdeka Batch 3, Mitra : PT. Impactbyte Teknologi Edukasi - Skilvul Tech4Impact, Learning Track : Front-End Web Development
                <ul className='list-group list-title'>
                    <li className='list-title'>What lessons did I get while participating in the activity?</li>
                    <li className='list'>Learn the flow of making Digital Products using Design Thinking</li>
                    <li className='list'>Learn how to make Wireframe & High-Fi Prototype using Figma</li>
                    <li className='list'>Learn the flow of making Digital Products using Design Thinking</li>
                    <li className='list'>Learn basic fundamental of Web Development with HTML, CSS, & JavaScript</li>
                    <li className='list'>Learn how to manage source code with Git and remote repositories on GitHub</li>
                    <li className='list'>Learn to develop Front-End Project with React js as Library Framework</li>
                    <li className='list'>Learn how to collaborate on teams and create project groups based on case studies from challenge partners</li>
                </ul>
            </li>
            </ul>
    </article>
  )
}

export default Experience
