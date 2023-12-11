import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Navbar.scss'
import logo from './images/logo.png'

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [openNavbar, setOpenNavvbar] = useState(true)

  const toggleNav = () => {
    setOpenNavvbar(!openNavbar)
  }



  return (
    <div>
        <div className='navSection'>
            <Link to={'/'}><img src={logo} alt="" width={200}/></Link>


            <div className='navSecTwoDivOne hideSmall'>
              <p>Home</p>
              <p>Properties</p>
              <p>Become an agent</p>
              <p>Company</p>
            </div>

            <div className='navSecTwoDivTwo hideSmall'>
              <p>Login</p>
              <button>Sign up</button>
            </div>

            <div className='navIcons'>
              {openNavbar ? <HiMiniBars3BottomLeft onClick={toggleNav}/> : <IoMdClose onClick={toggleNav}/>}
            </div>



            <div className= {`displaySmall ${openNavbar ? 'open' : ''}`}>
              <div className='navSecTwoDivOne'>
                <p>Home</p>
                <p>Properties</p>
                <p>Become an agent</p>
                <p>Company</p>
              </div>

              <div className='navSecTwoDivTwo'>
                <p>Login</p>
                <button>Sign up</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar