import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import Carosel from '../Components/HomeCompo/Carosel'
import SectionThree from '../Components/HomeCompo/SectionThree'
import SectionFour from '../Components/HomeCompo/SectionFour'


const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <Carosel />
        <SectionThree />
        <SectionFour />
    </div>
  )
}

export default Home