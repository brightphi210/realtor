import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'


const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
    </div>
  )
}

export default Home