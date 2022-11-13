import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaCalendar } from 'react-icons/fa';
import Footer from '../components/Footer';

function Article() {

  // const [ article, setArticle ] = useState();

  // useEffect( () => {
  //     axios('https://api-berita-indonesia.vercel.app/antara/tekno/').then( res => {
  //         setArticle(res.data.posts);
  //     } )
  // }, [article] );


// console.log(article)
  return (
    <>
        <section className='article-section mb-3'>
            <h1 className='title-page text-secondary text-center mt-3 mb-2'>Blog & Article</h1>
            <article className='main-article p-3'>
              <div className='row d-flex justify-content-center flex-column f-wrap'>
                <aside className='article-img me-3 mb-sm-3'>
                    <img src='./src/assets/image/bg.jpg' />
                </aside>
                <aside className='article-desc text-secondary w-50'>
                    <a href='' className='article-title text-secondary weight-bold'>Cara Membuat Web Design jadi Web Online</a>
                    <p href='' className='article-description mt-2'>Cara convert web design ke website online / live adalah salah satu topik yang paling sering ditanyakan semenjak saya bikin channel ini. Nah di video kali ini saya menjelaskan langkah-langkah bagaimana mengubah web design…</p>
                    <p className='date-caption mt-2'><FaCalendar className='me-1'/>29 November 2019</p>
                </aside>
              </div>
            </article>
            <div className='row d-flex justify-content-center f-wrap'>
                  <article className='article-child text-secondary'>
                      <img src='./src/assets/image/bg.jpg' />
                      <a href='' className='article-title-child text-secondary weight-bold'>Cara Memahami Brief Kontes Logo di 99designs</a>
                      <p className='date-caption-child mt-2'><FaCalendar className='me-1'/>29 November 2019</p>
                  </article>
                  <article className='article-child text-secondary'>
                      <img src='./src/assets/image/bg.jpg' />
                      <a href='' className='article-title-child text-secondary weight-bold'>Cara Memahami Brief Kontes Logo di 99designs</a>
                      <p className='date-caption-child mt-2'><FaCalendar className='me-1'/>29 November 2019</p>
                  </article>
                  <article className='article-child text-secondary'>
                      <img src='./src/assets/image/bg.jpg' />
                      <a href='' className='article-title-child text-secondary weight-bold'>Cara Memahami Brief Kontes Logo di 99designs</a>
                      <p className='date-caption-child mt-2'><FaCalendar className='me-1'/>29 November 2019</p>
                  </article>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Article
