import React from 'react'
import './SectionTwo.scss'

import { FaLocationDot } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import m1 from './images/m1.png'
import m2 from './images/m2.png'
import m3 from './images/m3.png'

import prof from './images/prof.png'

const Carosel = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
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
    <div>
        <div className='caroselDiv'>
            <h2>Recommended Properties</h2>
            <p className='carolp'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere </p>

            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
            >
                <div className='caroselDivEach'>
                    <img src={m1} alt="" />
                    <div className='caroseldivEachText'>
                        <h3>92 ALLIUM PLACE, ORLANDO FL</h3>
                        <div className='carolPrice'>
                            <p><FaLocationDot />Maharashtra</p>
                            <h4>$ 590,693</h4>
                        </div>
                        <div className='carolSize'>
                            <p><LuBedDouble />4</p>
                            <p><PiBathtub />4</p>
                            <p><BsArrowsFullscreen />2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div className='profDivCarol'>
                                <img src={prof} alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className='iconsDiv'>
                                <p><BsShare /></p>
                                <p><TfiCommentAlt /></p>
                                <p><AiOutlinePlus /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='caroselDivEach'>
                    <img src={m2} alt="" />
                    <div className='caroseldivEachText'>
                        <h3>92 ALLIUM PLACE, ORLANDO FL</h3>
                        <div className='carolPrice'>
                            <p><FaLocationDot />Maharashtra</p>
                            <h4>$ 590,693</h4>
                        </div>
                        <div className='carolSize'>
                            <p><LuBedDouble />4</p>
                            <p><PiBathtub />4</p>
                            <p><BsArrowsFullscreen />2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div className='profDivCarol'>
                                <img src={prof} alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className='iconsDiv'>
                                <p><BsShare /></p>
                                <p><TfiCommentAlt /></p>
                                <p><AiOutlinePlus /></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='caroselDivEach'>
                    <img src={m3} alt="" />
                    <div className='caroseldivEachText'>
                        <h3>92 ALLIUM PLACE, ORLANDO FL</h3>
                        <div className='carolPrice'>
                            <p><FaLocationDot />Maharashtra</p>
                            <h4>$ 590,693</h4>
                        </div>
                        <div className='carolSize'>
                            <p><LuBedDouble />4</p>
                            <p><PiBathtub />4</p>
                            <p><BsArrowsFullscreen />2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div className='profDivCarol'>
                                <img src={prof} alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className='iconsDiv'>
                                <p><BsShare /></p>
                                <p><TfiCommentAlt /></p>
                                <p><AiOutlinePlus /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Carosel