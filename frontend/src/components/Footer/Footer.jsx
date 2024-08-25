import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, a.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
        </div>
        <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>privacy Policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 123456789</li>
                <li>contact@gmail.com</li>
              </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
