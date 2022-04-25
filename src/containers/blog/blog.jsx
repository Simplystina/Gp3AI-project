import React from 'react'
import './blog.css'
import { Article } from '../../component'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
const data = {
  title:'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  date:'Sep 26, 2021'
}
const Blog = () => {
  return (
    <div className='gp3blog-section' id='openai'>
      <h2 data-aos="zoom-in-up" data-aos-duration="2000" className='blog-heading'>A lot is happening, We are blogging about it.</h2>
      <div className='gp3-blog-container'>
        <div data-aos="zoom-in-left" data-aos-duration="2000" className='blog-article1'>
          <Article image={blog01} title={data.title} date={data.date}></Article>
        </div>
        <div className='blog-article2'>
          <Article image={blog02} title={data.title} date={data.date} ></Article>
          <Article image={blog03} title={data.title} date={data.date} id='lib'></Article>
          <Article image={blog04} title={data.title} date={data.date}></Article>
          <Article image={blog05} title={data.title} date={data.date}></Article> 
        </div>
      </div>
    </div>
  )
}

export default Blog
