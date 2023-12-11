import React from 'react'
import './SectionOne.scss'

const SectionOne = () => {


    
  return (
    <div className='sectionOne'>
        <div className='sectionDiv'>
            <div className='sectionContentDiv'>
                <h2>Find Your Dream <br /> Home Today!</h2>
                <div className='sectionBtns'>
                    <button>Buy</button>
                    <button>Rent</button>
                    <button>Sell</button>
                </div>

                <div className='sectionInputDiv'>
                    <input type="text" placeholder='Enter Keyword'/>
                    <select name="" id="">
                        <option value="">Property Type</option>
                        <option value="">Property Kind</option>
                    </select>

                    <select name="" id="">
                        <option value="">Location</option>
                        <option value="">Property kind</option>
                    </select>

                    <select name="" id="">
                        <option value="">Category</option>
                        <option value="">Rent</option>
                        <option value="">Buy</option>
                    </select>

                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne