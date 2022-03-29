import React from 'react'
import { featureData } from '../../component'
import './features.css'
console.log(featureData)
const Features = () => {
  return (
    <div className='section-features' id='casestudy'>
      <div className='features-heading'>
        <h2>The Future is Now and You Just Need To Realize It. 
          Step into Future Today 
          & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='features-content-section'>
        {featureData.map((data)=>{
          return <div className='features-content'>
            <div className='features-title'>
              <div className="features-underline"></div>
              <p>{data.title}</p>
            </div>
            <div className='feature-info'>
              <p>{data.info}</p>
            </div>
          </div>
        }
        )}
      </div>
    </div>
  )
}

export default Features
