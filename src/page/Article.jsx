import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from '../components/Footer';
import FirstArticle from '../components/FirstArticle';
import ChildArticle from '../components/ChildArticle';
import Loading from '../components/Loading';

function Article() {

  const [ article, setArticle ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect( () => {

     getAPiArticle('https://the-lazy-media-api.vercel.app/api/tech').then( data => {
      setArticle(data);
      setLoading(false);
    } );
  }, [] );

  const getAPiArticle = async (API) => {
    const res = await axios.get(API);
    return res.data;
  }

  return (
    <div className='bg-triangle-animated'>
      { loading ? (
        <Loading/>
      ) : (
          <section className='article-section' >
            <FirstArticle data={article[1]}/>
            <ChildArticle data={article} />
          </section>
      ) }

        <Footer/>
    </div>
  )
}

export default Article
