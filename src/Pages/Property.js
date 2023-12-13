import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ProSectionOne from '../Components/PropertyCompo/ProSectionOne'
import ProCarosel from '../Components/PropertyCompo/ProCarosel'

const Property = () => {
  return (
    <div>
        <Navbar />
        <ProSectionOne />
        <ProCarosel />
        <Footer />
    </div>
  )
}

export default Property