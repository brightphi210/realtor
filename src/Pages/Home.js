import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import Carosel from '../Components/HomeCompo/Carosel'


const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <Carosel />
    </div>
  )
}

export default Home