import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'

import shopImag from '../../../assets/image/products 12.png'
import Star from '../../../components/Star/Star'



export default function Shop() {
  return (
    <div className='shop'>
      <div className='shop-title'>
        <img className='shop-title-image' src={shopImag} alt="" />
        <div>
          <h3 className='shop-title-name' >Shop Name</h3>
          <div className="shop-star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          </div>
        </div>
        <div className='shop-title-g2'>
        <p className='shop-title-renk'>9.8DR</p>
        <Link>Report This</Link>
        </div>
      </div>
      <div className='shop-info'>
        <h4 className='shop-info-title'>Nature of Business</h4>
        <p className='shop-info-desc' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>
  )
}
