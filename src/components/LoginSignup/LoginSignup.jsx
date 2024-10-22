import React, { useState } from 'react'
import './LoginSignup.css'
import cross_icon from '/src/assets/cross_icon.png'

const LoginSignUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up");
  return (
    <div className='login-popup'>
                 <form className='login-popup-container'>
                   <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={cross_icon} alt=''/>

                    
                   </div>
                  <div className='login-popup-inputs'>
                    {currState==="Login"?<></>:<input type='text' placeholder='Name' required/>}
                    
                    <input type='email' placeholder='E-mail' required/>
                    <input type='password' placeholder='Password' required/>


                  </div>
                  <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
                  <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                  </div>
                  {currState==="Login"
                  ?  <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                  :  <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
                  }
                 
                 </form>
      </div>
    
  )
}

export default LoginSignUp