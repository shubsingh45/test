import React from 'react'
import Like from '../assests/like.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="flex w-[100%] h-[80px]  items-center justify-between footer-line"> 
        <img src={Like} alt="" className="w-6 h-6"/>
        <img src={Like} alt="" className="w-6 h-6" />
        <img src={Like} alt="" className="w-6 h-6" />        
        <img src={Like} alt="" className="w-6 h-6" />  
        <img src={Like} alt="" className="w-6 h-6" />
        </div>
    </div>
  )
}

export default Footer