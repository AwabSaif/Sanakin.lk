import React from 'react'
import './ShopOnline.css'
import Hero from '../../components/Hero/Hero'
import Shop from '../../Sections/ShopOnline/Shop/Shop'
import Category from '../../Sections/ShopOnline/Category/Category'
import ChoosebyShopsOnline from '../../Sections/ShopOnline/ChoosebyShops/ChoosebyShopsOnline'
import HomePoster from '../../Sections/HomeSections/HomePoster/HomePoster'
import TrandingProducts from '../../Sections/HomeSections/TrandingProducts/TrandingProducts'


export default function ShopOnline() {
  return (
    <div className='shoponline-container'>
      <Hero />
      <Shop />
      <Category />
      <Category />
      <ChoosebyShopsOnline />
      <HomePoster />
      <TrandingProducts />
      </div>
  )
}
