import React from 'react'
import './HeroHome.css'

import Button from '../../Button/Button'

export default function HeroHome() {
    return (
        <div className='herohome'>
            <h3>Find the Best Products with <span>Reliability</span></h3>
            <form className="search-input__submit">
                <input className='search-input' type="search" placeholder="Search Here Shop or Product" />
                <Button size='sm' variant='primary' className='serach-btn'>
                    Search
                </Button>
            </form>

        </div>
    )
}
