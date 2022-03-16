import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='headerArrowContainer'>
            <ArrowLeft/>
            <ArrowRight style={{marginLeft:20}}/>   
        </div>
        <div className='headerSearchBoxContainer'>
            <input type="text" placeholder="Search" style={{padding:10}}/>
        </div>
    </div>
  )
}

export default Header   