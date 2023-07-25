import React from 'react'
import './MostPopular.css'
import Product from '../../../components/product/product'
import productImag from '../../../assets/image/products 1.png'

export default function MostPopular() {
  return (
    <div className='mostpopular'>
        <h2>Most Popular Products</h2>
        <div className="mostpopular-items">
            <Product 
           image={productImag}
            name="Product Name"
            price="RS.100,000.00"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
          />
            <Product 
           image={productImag}
            name="Product Name"
            price="RS.100,000.00"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
          />
            <Product 
           image={productImag}
            name="Product Name"
            price="RS.100,000.00"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
          />
            <Product 
           image={productImag}
            name="Product Name"
            price="RS.100,000.00"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
          />
        </div>
        
    </div>
  )
}
