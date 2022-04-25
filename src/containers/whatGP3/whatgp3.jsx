import React,{useEffect} from 'react'
import './whatgp3.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Whatgp3 = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in"  data-aos-duration="2000" className='whatgp3-section gpt3__whatgpt3'>
        <div className='whatgp3-heading'>
          <div className='whatgp3-heading-main'>
             <div className='whatgp3-underline' id='whatgp3'></div>
             <h2>What is GPT-3</h2>
          </div>
          <p data-aos="fade-right" data-aos-duration="2000">We so opinion friends me message as delight. 
            Whole front do of plate heard oh ought.
             His defective nor convinced residence own. 
             Connection has put impossible own apartments 
             boisterous. At jointure ladyship an insisted so 
             humanity he. Friendly bachelor entrance to on by.
          </p>
        </div>
        <div data-aos="flip-right" data-aos-duration="2000" className='whatgp3-heading-2'>
          <h2>The Possibilities are beyond your imagination</h2>
          <p>Explore the library</p>
        </div>
        <div className='whatgp3-contents'>
          <div data-aos="zoom-in-up" data-aos-duration="2000" className='whatgp3-content1'>
            <div className='whatgp3-underline'></div>
            <h2>Chatbots</h2>
            <p>We so opinion friends me message as delight. 
              Whole front do of plate heard oh ought.
            </p>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="2000" className='whatgp3-content2'>
            <div className='whatgp3-underline'></div>
            <h2>Knowledgebase</h2>
            <p>At jointure ladyship an insisted so humanity he. 
              Friendly bachelor entrance to on by. 
              As put impossible own apartments b</p>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="2000" className='whatgp3-content3'>
            <div className='whatgp3-underline'></div>
            <h2>Education</h2>
            <p>At jointure ladyship an insisted so humanity he. 
              Friendly bachelor entrance to on by. 
              As put impossible own apartments b
              </p>
          </div>
        </div>

      </div>
  )
}

export default Whatgp3
