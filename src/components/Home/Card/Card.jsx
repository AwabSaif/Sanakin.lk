import React from 'react'
import './Card.css'

export default function Card({name ,image  ,styleName}) {
  return (
    
    <div className={`card ${styleName}`}>
    <p >{name}</p>
    <img  className='card-img' src={image} />
    </div>
  )
}
