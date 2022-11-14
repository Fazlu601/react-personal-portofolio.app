import React from 'react'
import { FaCalendar } from 'react-icons/fa';

function FirstArticle({data}) {
return (
    <section className='article-first-section mb-3'>
        <h1 className='title-page text-secondary text-center mt-3 mb-2'>Blog & Article</h1>
        <article className='main-article p-3'>
        <div className='row d-flex justify-content-center flex-column f-wrap'>
            <aside className='article-img me-3 mb-sm-3'>
                <img src={data.thumb}/>
            </aside>
            <aside className='article-desc text-secondary w-50'>
                <a href='' className='article-title text-secondary weight-bold'>{data.title}</a>
                <p href='' className='article-description mt-2'>{data.desc}</p>
                <p className='date-caption mt-2'><FaCalendar className='me-1'/>{data.time}</p>
            </aside>
        </div>
        </article>
    </section>
)
}

export default FirstArticle