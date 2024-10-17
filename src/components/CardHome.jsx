import React from 'react'

export default function CardHome({image, link}) {
  return (

    
      <div className='card-home'>
        <a href={link}><img src={image} alt="404" /></a>


    </div>
  )
}
