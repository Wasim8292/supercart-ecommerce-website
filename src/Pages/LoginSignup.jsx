import React, { useState } from 'react'
import "../CSS/LoginSignup.css"
import { useLocation, useNavigate } from "react-router-dom"

const LoginSignup = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const isSignup = location.pathname === "/signup"

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [agree,setAgree] = useState(false)

  const handleSignup = () => {

    if(!agree){
      alert("Please agree to the terms & privacy policy")
      return
    }

    const user = {
      name:name,
      email:email,
      password:password
    }

    localStorage.setItem("user", JSON.stringify(user))

    alert("Signup Successful")

    navigate("/login")
  }

  const handleLogin = () => {

    if(!agree){
      alert("Please agree to the terms & privacy policy")
      return
    }

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if(storedUser && email === storedUser.email && password === storedUser.password){

      alert("Login Successful")

      localStorage.setItem("login","true")

      navigate("/")

    }else{

      alert("Invalid Email or Password")

    }

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>{isSignup ? "Sign Up" : "Login"}</h1>

        <div className='loginsignup-fields'>

          {isSignup && (
            <input 
            type='text' 
            placeholder='Your Name'
            onChange={(e)=>setName(e.target.value)}
            />
          )}

          <input 
          type='email' 
          placeholder='Email Address'
          onChange={(e)=>setEmail(e.target.value)}
          />

          <input 
          type='password' 
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        <button onClick={isSignup ? handleSignup : handleLogin}>
          Continue
        </button>
        
        <p className="loginsignup-login">
          {isSignup ? (
            <>Already have an account ? <span onClick={()=>navigate("/login")}>Login here</span></>
          ) : (
            <>Don't have an account ? <span onClick={()=>navigate("/signup")}>Signup here</span></>
          )}
        </p>

        <div className='loginsignup-agree'>
          <input 
            type='checkbox'
            onChange={(e)=>setAgree(e.target.checked)}
          />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup