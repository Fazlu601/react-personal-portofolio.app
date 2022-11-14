import React from 'react'
import { FaCalendar } from 'react-icons/fa';

function ChildArticle({data}) {
  return (
    <section className='article-child'>
      <div className='row d-flex justify-content-center f-wrap'>
          {data.map( (item, index) => {
              if(index !== 0) {
              return (  <article key={index} className='article-child text-secondary d-flex justify-content-between' style={{marginBottom: '30px', flexDirection: 'column'}}>
                      <img src={item.thumb} />
                      <a href='' className='article-title-child text-secondary weight-bold pt-1'>{item.title}</a>
                      <p className='date-caption-child mt-2'><FaCalendar className='me-1'/>{item.time}</p>
                </article>)
              }
          } )}
      </div>
    </section>
  )
}

export default ChildArticle
