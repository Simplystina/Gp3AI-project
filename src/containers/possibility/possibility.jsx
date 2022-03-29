import React from 'react'
import image from '../../assets/possibility.png'
import './possibility.css'
const Possibility = () => {
  return (
    <div className='possibility-section'>
       <div className='image-container'>
         <img src={image} alt="possibility"></img>
       </div>
       <div className='possibility-contents'>
         <h4 className='possibility-heading1'>Request Early Access to Get Started</h4>
         <h2>The possibilities are beyond your imagination</h2>
         <p>Yet bed any for travelling assistance indulgence unpleasing. 
           Not thoughts all exercise blessing. 
           Indulgence way everything joy alteration boisterous the attachment. 
           Party we years to order allow asked of.
        </p>
        <h4 className='possibility-heading2'>Request Early Access to Get Started</h4>
       </div>
    </div>
  )
}

export default Possibility
