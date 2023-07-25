import React from 'react'
import './ProductCategory.css'
import Button from '../Button/Button'


export default function ProductCategory() {
  return (
    <div className='productcategory'>

        <div className='productcategory-item'>
                    <h3>Product Category</h3>
                    <div className='productcategory-btn' >
                    <Button  
                    size ="md"
                    variant='silver'
                    >Shop Now</Button>
                    </div>
        </div>
                    </div>
  )
}
