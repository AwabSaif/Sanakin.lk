import React from 'react'
import './Home.css'
import Hero from '../../Sections/Hero/Hero'
import ShopOurTopCategories from '../../Sections/HomeSections/ShopOurTopCategories/ShopOurTopCategories'
import BestDealsForYou from '../../Sections/HomeSections/BestDealsForYou/BestDealsForYou'
import ChoosebyShops from '../../Sections/HomeSections/ChoosebyShops/ChoosebyShops'
import MostPopular from '../../Sections/HomeSections/MostPopular/MostPopular'
import TodayBestDeals from '../../Sections/HomeSections/TodayBestDeals/TodayBestDeals'
import HomePoster from '../../Sections/HomeSections/HomePoster/HomePoster'
import TrandingProducts from '../../Sections/HomeSections/TrandingProducts/TrandingProducts'



export default function Home() {
  return (
    <div className="home-container">

    <Hero/>
    <ShopOurTopCategories/>
    <BestDealsForYou/>
    <ChoosebyShops/>
    <MostPopular />
    <div className='home-div'>

    </div>
    <TodayBestDeals />
    <HomePoster />
    <TrandingProducts/>


    </div>
  
 
  )
}
