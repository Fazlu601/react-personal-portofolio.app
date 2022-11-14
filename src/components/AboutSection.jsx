import React from 'react'
import Profile from './Profile'

function AboutSection() {
  return (
    <article className='about-me text-center mx-auto w-60 w-sm-100 p-3'>
        <Profile source='./src/assets/image/profile2.png' />
        <h1 className='title-page text-secondary mt-3 mb-2'>About Me</h1>
        <p className='text-secondary'> I am a student majoring in information systems who are interested and want to learn many things about programming, especially in web development. I feel this is the right passion for me, and I will continue to study as best as I can to pursue the career I dream of.</p>
    </article>
  )
}

export default AboutSection
