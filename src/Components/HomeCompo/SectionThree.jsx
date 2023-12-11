import React from 'react'

import './SectionThree.scss'

import d from './images/d.png'

const SectionThree = () => {
  return (
    <div className=''>
        <div className='sectionThree'>
            <div className='sectionThreeOne'>
                <img src={d} alt="" />
            </div>
            <div className='sectionThreeTwo'> 
               <div className='sectionThreeText'>
                    <h2>Secure your place as a  Real <br /> Estate Agent</h2>
                    <p>
                        We refresh our listings every five minutes, 
                        so you’ll get notified when the perfect home hits the market. 
                        And with on-demand tours, your Redfin 
                        agent will help you tour as many homes as you want 
                        until you find the one.
                    </p>
                    <button>Learn More</button>
               </div>
            </div>
        </div>


        <div className='sectionThreea'>

            <div className='sectionThreeTwoa'> 
               <div className='sectionThreeTexta'>
                    <h2>Need a home? Contact our  Real <br /> Estate Agents</h2>
                    <p>
                        We refresh our listings every five minutes, 
                        so you’ll get notified when the perfect home hits the market. 
                        And with on-demand tours, your Redfin 
                        agent will help you tour as many homes as you want 
                        until you find the one.
                    </p>
                    <button>Learn More</button>
               </div>
            </div>

            <div className='sectionThreeOne'>
                <img src={d} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionThree