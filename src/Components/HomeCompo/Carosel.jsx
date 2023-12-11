import React from 'react'
import './SectionTwo.scss'

import { FaLocationDot } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import m1 from './images/m1.png'
import m2 from './images/m2.png'
import m3 from './images/m3.png'

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
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere </p>

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
                            <p>4</p>
                            <p>4</p>
                            <p>2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div>
                                <img src="" alt="" />
                                <h4>Jenny Wilson</h4>
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
                            <p>4</p>
                            <p>4</p>
                            <p>2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div>
                                <img src="" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div>
                                <p></p>
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
                            <p>4</p>
                            <p>4</p>
                            <p>2,096.00 ft</p>
                        </div>

                        <hr />

                        <div className='carolProfile'>
                            <div>
                                <img src="" alt="" />
                                <h4>Jenny Wilson</h4>
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