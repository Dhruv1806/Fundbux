import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const SignUp = () => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnter:""
  })

  const handleChange = (e )=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const register=()=>{
     const {name,email,password,reEnter}= user
     if(name && email && (password===reEnter) ){ 
      alert("posted") 
       axios.post('http://localhost:8000/register',user)
      //  .then(res=>console.log(res))
     }
     else{
      alert("invalid input")
     }
  }


  return (

    <div>
      {console.log("User",user)}
       <input type='text' name='name' value={user.name} onChange={ handleChange} placeholder='Enter your name'/>
       <br /><br />
      <input type='email' name='email' value={user.email} onChange={ handleChange} placeholder='Enter your email'/>
      <br /><br />
      <input type='password'   name='password' value={user.password} onChange={ handleChange} placeholder='Enter your password'/>
      <br />
      <br />
      <input type='password' name='reEnter' value={user.reEnter} onChange={ handleChange} placeholder='Enter your password'/>
      <br />
      <br />
      <button onClick={register}>Signup</button></div>
  )
}
