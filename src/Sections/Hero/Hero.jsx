import React from 'react'
import './Hero.css'
import Button from '../../components/Button/Button'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-item'>

        <h3>Find the Best Products with <span>Reliability</span></h3>
        <form className="search-input__submit">
            <input className='search-input' type="search" placeholder="Search Here Shop or Product" />
            <Button  size='sm' variant='primary' className='serach-btn'>
            Search
            </Button>
            </form>
        </div>
    </div>
  )
}
