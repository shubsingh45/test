import React from 'react'
import Like from '../assests/like.png'
const Navbar = () => {
  return (
    <div className='Nav-div'>
        <div className="flex w-[100%] h-[80px] justify-between navline items-center"> 
        <h1 className="text-[33px]"> Instagram</h1>
        <img src={Like} alt="" className="w-6 h-6 ml-[80px]"/>
        <img src={Like} alt="" className="w-6 h-6" />
        </div>
    </div>
  )
}

export default Navbar