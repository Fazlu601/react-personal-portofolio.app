import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Loading from '../components/Loading';
import ProjectGroup from '../components/ProjectGroup'
import SkillsIcon from '../components/SkillsIcon'

function Skills() {

  const [loading, setLoading] = useState(true);

  useEffect( () => {
      setTimeout( () => {
          setLoading(false);
      }, 1500 )
  }, [] )

  return (
    <div className='bg-triangle-animated'>
      { loading ? (
        <Loading/>
      ) : (
        <section className='skill-portofolio-section'>
          <SkillsIcon/>
          <ProjectGroup/>
        </section>
      ) }
        <Footer/>
    </div>
  )
}

export default Skills