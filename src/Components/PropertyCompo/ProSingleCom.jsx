import React from 'react'
import './ProSingle.scss'

import { BsShare } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";

import proSingleImage from './Images/m3.png'
import proSingProf from './Images/prof.png'

const ProSingleCom = () => {
  return (
    <div>
        <div className='proSecOne'>
            <div>
                <h2>Properties</h2>
                <p><span>Home / </span>Properties</p>
            </div>
        </div>


        <div className='proSingleDiv'>

          <div className='proSingleDivFlex'>
            <div className='proSingleSub'>
              <div className='proDivSing'>
                <img src={proSingProf} alt=""  width={30}/>
                <p>Jenny Wilson</p>
              </div>

              <div className='proIconsDiv'>
                  <p><BsShare /></p>
                  <p><TfiCommentAlt /></p>
                  <p><AiOutlinePlus /></p>
              </div>
            </div>

            <div className='proSingText'>
              <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et 
                ultrices posuere cubilia curae; Proin sodales ultrices 
                nulla blandit volutpat.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Proin sodales ultrices nulla blandit... readmore.
              </p>

              <h3>$ 590,693</h3>
              <button>Purchase</button>
            </div>
          </div>

          <div className='proSingleDivImage'>
            <img src={proSingleImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default ProSingleCom