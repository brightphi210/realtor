import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import Carosel from '../Components/HomeCompo/Carosel'
import SectionThree from '../Components/HomeCompo/SectionThree'


const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <Carosel />
        <SectionThree />
    </div>
  )
}

export default Home