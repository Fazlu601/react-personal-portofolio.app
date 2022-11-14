import React, { useEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

function About() {
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
        <section className='about-section'>
            <AboutSection/>
            <Experience/>
            <Education/>
        </section>
      ) }
        
        <Footer/>
    </div>
  )
}

export default About