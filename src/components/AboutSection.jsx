import React from 'react'
import Profile from './Profile'
import ImageProfile from '../assets/profile2.png'

function AboutSection() {
  return (
    <article className='about-me text-center mx-auto w-60 w-sm-100 p-3'>
        <Profile source={ImageProfile} />
        <h1 className='title-page text-secondary mt-3 mb-2'>About Me</h1>
        <p className='text-secondary'>I am a recent graduate who is passionate about programming, particularly in the field of web development.</p>
    </article>
  )
}

export default AboutSection
