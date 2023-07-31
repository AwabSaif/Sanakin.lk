import React from 'react'
import './Home.css'
import ShopOurTopCategories from '../../Sections/HomeSections/ShopOurTopCategories/ShopOurTopCategories'
import BestDealsForYou from '../../Sections/HomeSections/BestDealsForYou/BestDealsForYou'
import ChoosebyShops from '../../Sections/HomeSections/ChoosebyShops/ChoosebyShops'
import MostPopular from '../../Sections/HomeSections/MostPopular/MostPopular'
import TodayBestDeals from '../../Sections/HomeSections/TodayBestDeals/TodayBestDeals'
import HomePoster from '../../Sections/HomeSections/HomePoster/HomePoster'
import TrandingProducts from '../../Sections/HomeSections/TrandingProducts/TrandingProducts'
import HomeHero from '../../Sections/HomeSections/HomeHero/HomeHero'



export default function Home() {
  return (
    <div className="home-container">

    <HomeHero/>
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
