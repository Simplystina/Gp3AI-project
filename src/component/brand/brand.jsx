import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './brand.css'
const Brand = () => {
  return (
    <div className='brand-section'>
      <div >
         <img className='brand-google' src={google}></img>
      </div>
      <div>
         <img className='brand-slack' src={slack}></img>
      </div>
      <div>
         <img className='brand-atlassian' src={atlassian}></img>
      </div>
      <div>
         <img className='brand-dropbox' src={dropbox}></img>
      </div>
      <div>
          <img className='brand-shopify' src={shopify}></img>
      </div>
    </div>
  )
}

export default Brand
