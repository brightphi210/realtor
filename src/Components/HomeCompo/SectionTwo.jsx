import React from 'react'
import './SectionTwo.scss'


import { BsHouseDoor } from "react-icons/bs";
import { BsPersonFillUp } from "react-icons/bs";
import { LuThumbsUp } from "react-icons/lu";


const SectionTwo = () => {

  return (
    <div className='sectionTwo'>
        <h2>Here’s what you can do on <br /> RealtorOne Pro</h2>
        
        <div className='sectionTwoDiv'>
            <div className='sectTwoEachDiv'>
                <p className='secTwoIcons'><BsHouseDoor /></p>
                <h2>Our service one</h2>
                <p>We use our exclusive client database to market the property in a tailor-made way - discreetly if desired.</p>
                <button>Learn More</button>
            </div>

            <div className='sectTwoEachDiv'>
                <p className='secTwoIcons'><BsPersonFillUp /></p>
                <h2>Meet your agent</h2>
                <p>We use our exclusive client database to market the property in a tailor-made way - discreetly if desired.</p>
                <button>Learn More</button>
            </div>

            <div className='sectTwoEachDiv'>
                <p className='secTwoIcons'><LuThumbsUp /></p>
                <h2>Closing deals</h2>
                <p>We use our exclusive client database to market the property in a tailor-made way - discreetly if desired.</p>
                <button>Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default SectionTwo