import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logimage from './login.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import './Login.scss'

const LoginCom = () => {

    const [showBtn, setShowBtn] = useState(false)

    const toggleBtn = () =>{
        setShowBtn(!showBtn)
    }
  return (
    <div>

        <div className='loginDiv'>
            <div className='logimageDiv'>
                <img src={logimage} alt="" />
            </div>

            <div className='logTextDiv'>
                <Link to={'/'}><p className='backLog'><IoChevronBackCircle /></p></Link>
                <h2>Login to RealtorOne</h2>
                <form action="">
                    <div className='inputDiv'>
                        <p>Phone number</p>
                        <input type="text"  placeholder='Email Address'/>
                    </div>

                    <div className='inputDiv'>
                        <p>Password</p>
                        <div className='inputDivEye'>
                            <input type={showBtn ? "text" : 'password'} placeholder='Password' />
                            <p className='eyeDIv' onClick={toggleBtn}>{showBtn ? <FaRegEye/> : <FaEyeSlash/> } </p>
                        </div>
                    </div>

                    <div className='logRem'>
                        <p>Remember me</p>
                        <p className='logRight'>Forgot password?</p>
                    </div>

                    <button className='logBtn'>Login</button>
                    <div className='logOrDiv'>
                        <hr />
                        <p>Or login with</p>
                        <hr />
                    </div>

                    


                    <div className='logIcons'>
                        <div className='logIconsDiv'>
                            < FaGoogle />
                        </div>

                        <div className='logIconsDiv'>
                            <FaFacebookF />
                        </div>

                        <div className='logIconsDiv'>
                            <FaTwitter />
                        </div>
                    </div>

                    <p className='dont'>Don’t have an account? <span><Link to={'/signup'}>Signup</Link></span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginCom