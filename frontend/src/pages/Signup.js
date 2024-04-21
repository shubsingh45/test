import React from 'react'
import { Link } from 'react-router-dom'
import './Custom.css'
const SignUp = () => {
  return (
    <div className='main-div'>
        <div className="second-div flex flex-col justify-center items-center h-[100%] gap-2">
        <h1 className="text-[50px] mb-5 text-white">Instagram</h1>
            <input type="text"  placeholder='UserName'  className= "bg-black w-[80%] h-[38px] text-white input"/>
            <input type="text"  placeholder='Email'  className= "bg-black w-[80%] h-[38px] text-white input"/>
            <input type="text" placeholder='Password' className="bg-black  w-[80%] h-[38px] text-white input" />
            <button className="signin-btn">Sign In</button>
            <p className="mt-3 text-[19px]"> Don't have an account ? <Link to={'/signin'}> <span className="text-white">Sign In</span></Link> </p>
        </div>
    </div>
  )
}
 
export default SignUp