import React from 'react'

import './Footer.scss'
import footLogo from './logo.png'

const Footer = () => {
  return (
    <div className='footerSection'>
        <div className='footOne'>
            <img src={footLogo} alt="" width={200}/>
            <p className='footDesc'>
                The Primary goal at Zehome is to acquire and 
                rehab properties that replenish the neighborhood
                we are apart of. We offer Standard AR/VR for Virtual 
                Tours in different location
            </p>
        </div>

        <div className='footOne Two'>
            <div>
            <h2>Our Company</h2>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Contact US</p>
            </div>
        </div>

        <div className='footOne three'>
            <div>
            <h2>Contact Info</h2>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486.</p>
            <p><span>Phone:</span> (239) 555-0108</p>
            <p><span>Email: </span>abcd@domain.com</p>
            <p><span>Website:</span> abcd@domain.in</p>
            </div>
        </div>
    </div>
  )
}

export default Footer