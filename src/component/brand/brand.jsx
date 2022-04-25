import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './brand.css'
const Brand = () => {
  return (
    <div className='brand-section' data-aos="flip-left"  data-aos-duration="2000" >
      <div >
         <img className='brand-google' src={google} alt=''></img>
      </div>
      <div>
         <img className='brand-slack' src={slack} alt=''></img>
      </div>
      <div>
         <img className='brand-atlassian' src={atlassian} alt=''></img>
      </div>
      <div>
         <img className='brand-dropbox' src={dropbox} alt=''></img>
      </div>
      <div>
          <img className='brand-shopify' src={shopify} alt=''></img>
      </div>
    </div>
  )
}

export default Brand
