import React from 'react'
import './ProSectionOne.scss'

import rightImg from './Images/propImgb.png'

const ProSectionOne = () => {
  return (
    <div className='propertySection'>
        <div className='proSecOne'>
            <div>
                <h2>Properties</h2>
                <p><span>Home / </span>Properties</p>
            </div>
        </div>

        <div className='proSectTwo'>
            <div className='proOne'>
                <div className=''>
                    <h2>Recommended Listings</h2>
                    <div className='proOneEach'>
                        <h3>Living Inside a Nature</h3>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Eget diam habitant massa in.
                        </p>
                    </div>

                    <div className='proOneEach'>
                        <h3>Live view, video tour</h3>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Eget diam habitant massa in.
                        </p>
                    </div>


                    <div className='proOneEach'>
                        <h3>Luxurious Fittings</h3>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Eget diam habitant massa in.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='proTwo'>
                <img src={rightImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProSectionOne