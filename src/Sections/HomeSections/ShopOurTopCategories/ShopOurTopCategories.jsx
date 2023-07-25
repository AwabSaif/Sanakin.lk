import React from 'react'
import './ShopOurTopCategories.css'
import thchImg from '../../../assets/image/lap 1.png'
import electoins from '../../../assets/image/20220506_Batch148_12_watch 1.png'
import health from '../../../assets/image/Cosmetics-Mockup 1.png'
import Card from '../../../components/Card/Card'




export default function ShopOurTopCategories() {
    return (
        <div className='categories' >
            <h2>Shop Our Top Categories</h2>
            <div className='categories-items'>

          <Card 
            styleName="categorie-tech"
            name="Tech"
            image={thchImg}
          />
          <Card 
            styleName="categorie-electoins"
            name="Electronics"
            image={electoins}
            />
          <Card 
            styleName="categorie-health"
            name="Health & Beauty"
            image={health}
          />
          <Card 
            styleName="categorie-fashion"
            name="Fashion"
          />
          <Card 
            styleName="categorie-furnitrue"
            name="Furniture"
          />
          <Card 
            styleName="categorie-sports"
            name="Sports"

          /> 

            </div>


        </div>
    )
}
