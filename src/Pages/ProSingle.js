import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import SectionFour from '../Components/HomeCompo/SectionFour'
import ProSingleCom from '../Components/PropertyCompo/ProSingleCom'


const ProSingle = () => {
  return (
    <div>
        <Navbar />
        <ProSingleCom />
        <SectionFour />
        <Footer />
    </div>
  )
}

export default ProSingle