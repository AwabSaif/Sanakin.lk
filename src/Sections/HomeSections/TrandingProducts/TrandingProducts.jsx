import React from 'react'
import './TrandingProducts.css'
import ProductCategory from '../../../components/ProductCategory/ProductCategory'


export default function TrandingProducts() {
  return(
    <div className='trandingproducts' >
        <h2>Tranding Products</h2>
                <div className='trandingproducts-items'>
                <ProductCategory />
                <ProductCategory />
                    </div> 

              

            </div>

            

  )
}
