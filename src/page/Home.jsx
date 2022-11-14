import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading';


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
        ) : <Header/> 
        }
    </>
  )
}

export default Home