import React from 'react'
import './BestDealsForYou.css'
import Product from '../../../components/product/product'
import proIMg from '../../../assets/image/products 1.png'

export default function BestDealsForYou() {
  return (
    <div className='best-products' >
      <h2>Best Deals For You!</h2>
      <div className='best-products-items'>
        <Product
          image={proIMg}
          name="Product Name"
          price="RS.100,000.00"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        />
        <Product
          image={proIMg}
          name="Product Name"
          price="RS.100,000.00"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        />
        <Product
          image={proIMg}
          name="Product Name"
          price="RS.100,000.00"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        />
        <Product
          image={proIMg}
          name="Product Name"
          price="RS.100,000.00"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        />



      </div>


    </div>
  )
}
