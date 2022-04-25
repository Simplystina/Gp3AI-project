import React from 'react'
import './article.css'
const Article = ({image, date,title}) => {
  return (
    <div data-aos="zoom-in-left" data-aos-duration="2000" className='article'>
      <div className='article-img-container'>
         <img src={image}></img>
      </div>
      <div className='article-content'>
          <p>{date}</p>
          <h2>{title}</h2>
        <div className='article-lastcontent'>
          <p >Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article
