import React from 'react'
import './Hero.css'
import HeroHome from '../../components/Home/Hero/HeroHome'


export default function Hero({children}) {
  return (
    <div className='hero'>
        <div className='hero-item'>
         {children}
        </div>
    </div>
  )
}
