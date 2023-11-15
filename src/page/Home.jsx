import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading';
import SkillsSection from '../components/SkillsSection';


function Home() {
  
  const [loading, setLoading] = useState(true);
  useEffect( () => {
      setTimeout( () => {
          setLoading(false);
      }, 1500 )
  }, [] )

  return (
    <>
        { loading ? ( 
            <Loading/>
        ) : <div className='bg-shape'>
              <Header/>
              <SkillsSection/>
              <Footer/>
            </div>
        }
    </>
  )
}

export default Home