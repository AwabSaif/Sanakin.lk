import React from 'react'
import './TodayBestDeals.css'
import Button from '../../../components/Button/Button'
import Product from '../../../components/product/product'
import proIMg from '../../../assets/image/products 1.png'
import { FaArrowRight } from "react-icons/fa";

export default function TodayBestDeals() {
  return (
    <div className='todaytestdeals'>
      <h2>Today Best Deals For You</h2>
      <nav className='todaytestdeals-nav'>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>
        <div className="todaytestdeals-nav-item" >
          <Button
            size='lg'
            variant="search"
          >
            Search Tags
          </Button>
        </div>

     
      </nav>

      <div className='todaytestdeals-items'>

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
      
        <a className='todaytestdeals-link' href="">Explore More<FaArrowRight className='todaytestdeals-icons' /></a>
      
    </div>
  )
}
