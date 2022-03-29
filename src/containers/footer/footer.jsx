import React from 'react'
import './footer.css'
import logo from './../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-heading'>
        <h2>Do you want to step into the future before others</h2>
       <button>Request Early Access</button>
      </div>
      <div className='footer-container'>
         <div className='footer-logo'>
            <img src={logo}></img>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
         </div>
         <div className='footer-links'>
           <h4>Links</h4>
           <p>Overons</p>
           <p>Social Media</p>
           <p>Counters</p>
           <p>Contact</p>
         </div>
         <div className='footer-company'>
           <h4>Company</h4>
           <p>Terms and Conditions</p>
           <p>Privacy Policy</p>
           <p>Contact</p>
         </div>
         <div className='footer-info'>
           <h4>Get in touch</h4>
           <p>Crechterwoord K12 182 DK Alknjkcb</p>
           <p>085-132567</p>
           <p>info@payme.net</p>
         </div>
       </div>
       <div className='footer-copywrite'>© 2021 GPT-3. All rights reserved.</div>
    </div>
  )
}

export default Footer
