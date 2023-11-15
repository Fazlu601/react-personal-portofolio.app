import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Loading from './Loading';
import ProjectGroup from './ProjectGroup'
import SkillsIcon from './SkillsIcon'

function SkillsSection() {

  const [loading, setLoading] = useState(true);

  useEffect( () => {
      setTimeout( () => {
          setLoading(false);
      }, 1500 )
  }, [] )

  return (
        <section className='skill-portofolio-section' id='skills'>
          <SkillsIcon/>
          <ProjectGroup/>
        </section>
  )
}

export default SkillsSection