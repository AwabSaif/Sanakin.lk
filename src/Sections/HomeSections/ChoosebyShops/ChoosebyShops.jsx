import React from 'react'
import './ChoosebyShops.css'
import shopImage from '../../../assets/image/shopping-bag 1.svg'
import CardShop from '../../../components/CardShop/CardShop'

export default function ChoosebyShops() {
  return (
    <div className='chooseby' >
        <h2>Choose by Shops</h2>

        <div className='chooseby-items' >
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
    </div>
  )
}
