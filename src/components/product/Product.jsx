import React from 'react'
import './Product.css'
import Button from '../Button/Button'
export default function Product(props) {
  return (
    <div className="product">
               <div className='product-img' > { <img style={{width:"100%"}} src={props.image} /> }</div>
                <p className='product-name'>{[props.name]}</p>
                <p className='product-price'>{props.price}</p>
             
                <p className='product-description' >{props.description}</p>
      
                <div className='product-btn' >
                <Button size='sm' variant='primary'>Add to cart</Button>
                </div>
    </div>
  )
}
