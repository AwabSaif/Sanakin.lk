import React from 'react'
import './Footer.css'
import Button from '../../components/Button/Button'
import logoImg from '../../assets//image/sanakilogo\ 2.png'

export default function Footer() {
  return (
    <footer>
      <div className='footer-con'>

        <div className='footer-contact'>
            <img src={logoImg} />
            <h2>Contact Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>info@sanakin.lk</p>
            <p>+011 2 345 678</p>
        </div>
        <div className='footer-pages'>
            <h2>Pages</h2>
            
               <a href="">Home </a> 
               <a href="">Shop Onlone</a> 
               <a href="">Shop Onlone</a> 
               <a href="">Contact us</a> 
               <a href="">About us</a> 
               <a href="">What’s New</a> 
               <a href="">Most Popular</a> 
               <a href="">Best Selling</a> 
            
        </div>
        <div className="footer-categroies">
            <h2>Categories</h2>
            
               <a href=""> Category 1 </a> 
               <a href=""> Category 2 </a> 
               <a href=""> Category 3 </a> 
               <a href=""> Category 4 </a> 
               <a href=""> Category 5 </a> 
            
        </div>
        <div className="footer-subscription">
            <h2>News Latter Subscription</h2>
            <p>Get the Latest Products & Best Deals in Your Inbox as First Person</p>
           
            <form className="pt-site-footer__submit">
            <input type="email" placeholder="Your Email Address" />
            <Button  size='sm' variant='primary' className='emil-btn'>
            Submit
            </Button>
            </form>
       
        </div>

        
      </div>

    </footer>
  )
}
