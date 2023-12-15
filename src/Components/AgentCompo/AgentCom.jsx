import React from 'react'
import './AgentCom.scss'

import { FiSearch } from "react-icons/fi";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import agentImage from './agentImage2.png'
import agents from './agents.png'

import { FaLocationDot } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { BsArrowsFullscreen } from "react-icons/bs";


const AgentCom = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};


  return (
    <div className='agentSection'>
        <div className='agentBanner'>
            <div className='agentText'>
                <h2>Turn your marketing skills to sales!</h2>
                <div className='agentInputDiv'>
                    <input type="text" placeholder='Search by location'/>
                    <button><FiSearch /></button>
                </div>
            </div>
        </div>

        <div className='agentSectionTwo'> 
          <div >
            <img src={agentImage} alt="" />
          </div>

            <div>
              <h2>Secure your place as a Real <br /> Estate Agent</h2>
              <p>
                We refresh our listings every five minutes, so you’ll get \
                notified when the perfect home hits the market. And with on-demand tours, 
                your Redfin agent will help you tour as many homes as you want until 
                you find the one.
              </p>
              <button>SignUp</button>
          </div>
        </div>

        <div className='meetDiv'>
          <h2 className='meetH2'>Meet our top agents</h2>
          
          <div className='meetFlex'>


              <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
            >
                <div className='meetProfDiv'>
                  <img src={agents} alt="" />
                  <h2>Realtor Pro Agent Name</h2>
                  <p><LuBedDouble />03</p>
                  <p><BsArrowsFullscreen />min. 12,000 Sq ft</p>
                  <p><FaLocationDot />Island, Lagos</p>
                </div>

                <div className='meetProfDiv'>
                  <img src={agents} alt="" />
                  <h2>Realtor Pro Agent Name</h2>
                  <p><LuBedDouble />03</p>
                  <p><BsArrowsFullscreen />min. 12,000 Sq ft</p>
                  <p><FaLocationDot />Island, Lagos</p>
                </div>

                <div className='meetProfDiv'>
                  <img src={agents} alt="" />
                  <h2>Realtor Pro Agent Name</h2>
                  <p><LuBedDouble />03</p>
                  <p><BsArrowsFullscreen />min. 12,000 Sq ft</p>
                  <p><FaLocationDot />Island, Lagos</p>
                </div>

                <div className='meetProfDiv'>
                  <img src={agents} alt="" />
                  <h2>Realtor Pro Agent Name</h2>
                  <p><LuBedDouble />03</p>
                  <p><BsArrowsFullscreen />min. 12,000 Sq ft</p>
                  <p><FaLocationDot />Island, Lagos</p>
                </div>

                <div className='meetProfDiv'>
                  <img src={agents} alt="" />
                  <h2>Realtor Pro Agent Name</h2>
                  <p><LuBedDouble />03</p>
                  <p><BsArrowsFullscreen />min. 12,000 Sq ft</p>
                  <p><FaLocationDot />Island, Lagos</p>
                </div>


              </Carousel>
          </div>
        </div>


        <div className='applyBanner'>
            <div className='applyText'>
                <h2>Apply to be a local Realtor Pro Agent</h2>
                <p>
                  Talk to a Local Agent and start you Journey. 
                  Talk to a Local Agent and start you JourneyTalk 
                  to a Local Agent and start you Journey. Talk to a 
                  Local Agent and start you Journey. Talk to a Local Agent 
                  and start you Journey.
                </p>
                <button>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default AgentCom