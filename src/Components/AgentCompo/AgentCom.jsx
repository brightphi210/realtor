import React from 'react'
import './AgentCom.scss'

import { FiSearch } from "react-icons/fi";


const AgentCom = () => {
  return (
    <div className='agentSection'>
        <div className='agentBanner'>
            <div className='agentText'>
                <h2>Turn your marketing skills to sales!</h2>
                <div className='agentInputDiv'>
                    <input type="text" placeholder='Search by location'/>
                    <button><FiSearch /></button>
                </div>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default AgentCom