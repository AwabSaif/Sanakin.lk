import React from 'react'
import './Category.css'
import Product from '../../../components/product/Product'
import proIMg from '../../../assets/image/products 1.png'
import ArrowIcons from '../../../components/ArrowIcons/ArrowIcons'
import { Link } from 'react-router-dom'
export default function Category() {
    return (
        <div className='category'>
            <div className='category-title' >
            <h2>Category Name</h2>
            <Link >See more <ArrowIcons/></Link>
            </div>
            <div className='category-items'>
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
