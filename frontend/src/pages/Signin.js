import React from 'react'
import { Link } from 'react-router-dom'
import './Custom.css'
const SignIn = () => {
  return (
    <div className='main-div'>
        <div className="second-div flex flex-col justify-center items-center h-[100%]">
        <h1 className="text-[50px] mb-5 text-white">Instagram</h1>
            <input type="text"  placeholder='Email'  className= "bg-black w-[80%] h-[38px] input"/>
            <input type="text" placeholder='Password' className="bg-black  w-[80%] h-[38px] mt-2 input" />
            <button className="signin-btn">Sign In</button>
            <p className="mt-3 text-[19px]"> Don't have an account ? <Link to={'/signup'}><span className="text-white">Sign Up</span></Link></p>
        </div>
    </div>
  )
}
 
export default SignIn