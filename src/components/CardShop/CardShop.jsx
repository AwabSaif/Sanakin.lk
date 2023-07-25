import React from 'react'
import './CardShop.css'


export default function CardShop(props) {
    return (
        <div className='shop' >
            <div className='shop-image-container'>
                <img className='shop-image' src={props.image} alt="" />
            </div>
            <div className='shop-text'>
                <p className='shop-name' >{props.name}</p>
                <p className='shop-product' >{props.Product}</p>
            </div>
        </div>
    )
}
