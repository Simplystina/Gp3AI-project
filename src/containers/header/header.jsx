import React,{useEffect} from 'react'
import image from '../../assets/ai.png'
import people from '../../assets/people.png'
import './header.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='header-section' id='home'>
      <div data-aos="fade-up"  data-aos-duration="2000" className='header-contents'>
        <h2>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. 
        Indulgence way everything joy alteration boisterous the attachment. 
        Party we years to order allow asked of.
        </p>
        <div className='form'>
          <input id='signin' placeholder='your email address' className='header-input'/>
            <h4 className='header-input-label'>Get Started</h4>
        </div>
        <div data-aos="fade-right"  data-aos-duration="2000"  className='header-people'>
          <img src={people} alt="people"></img>
           <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div data-aos="fade-down"  data-aos-duration="2000" className='header-image-container'>
        <img src={image} className='header-image' alt=''></img>
      </div>
      
    </div>
  )
}

export default Header
