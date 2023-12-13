import React, { useState } from 'react'
import './ProSingle.scss'

import { BsShare } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";

import { IoClose } from "react-icons/io5";

import proSingleImage from './Images/m3.png'
import proSingProf from './Images/prof.png'


const ProSingleCom = () => {


  const [openModal, setOpenModal] = useState(false)

  const isOpen = () =>{
    setOpenModal(true)
  }


  const isClose = () =>{
    setOpenModal(false)
  }


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
              <button onClick={isOpen}>Purchase</button>
            </div>
          </div>

          <div className='proSingleDivImage'>
            <img src={proSingleImage} alt="" />
          </div>
        </div>

        {openModal && (
          <div className='modal'>

            <div className='modal-content'>
              <div className='closeIcon'>
                <h2>Purchase property</h2>
                <p onClick={isClose}><IoClose /></p>
              </div>

              <hr />

              <div>
                <div className='proModalImage'>
                  <div>
                    <img src={proSingleImage} alt="" width={150} />
                  </div>

                  <div className='modalText'>
                    <h2>92 ALLIUM PLACE, ORLANDO <span>2,096.00 ft</span></h2>
                    <div className='modalPriceDiv'>
                      <h4>Purchase Total </h4>
                      <h3>NGN590,693</h3>
                    </div>
                    
                    <div className='modalCategory'>
                      <button>Category: Infooo..</button>
                      <select>
                        <option value="">Contact Salesman</option>
                      </select>
                    </div>


                    <p className='msgHint'>Hint text is here!</p>
                  </div>
                </div>

                <div className='modalBtns'>
                  <div></div>
                  <div className='btnModal'>
                    <button onClick={isClose}>Cancel</button>
                    <button className='pBtn'>Purchase</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
    </div>
  )
}

export default ProSingleCom