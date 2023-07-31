import React from 'react'
import './ChoosebyShopsOnline.css'
import ChoosebyShops from '../../HomeSections/ChoosebyShops/ChoosebyShops'
import shopImage from '../../../assets/image/shopping-bag 1.svg'
import CardShop from '../../../components/Home/CardShop/CardShop'
import { Link } from 'react-router-dom'
import ArrowIcons from '../../../components/ArrowIcons/ArrowIcons'

export default function ChoosebyShopsOnline() {
  return (
    <div className='choosebyohopsonline' >

      <h2>Choose by Shops</h2>

      <div className='choosebyohopsonline-items' >
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
        <CardShop
          image={shopImage}
          name='Shop Name'
          Product='24 Products'
        />
      </div>
      <div className='choosebyohopsonline-link'>
        <Link>Explore More<ArrowIcons /></Link>
      </div>
    </div>
  )
}
