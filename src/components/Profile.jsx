import React from 'react'

function Profile({source}) {
  return (
    <article className='profile-img w-100 text-center'>
        <img className='img-rounded-circle' src={source} />
    </article>
  )
}

export default Profile