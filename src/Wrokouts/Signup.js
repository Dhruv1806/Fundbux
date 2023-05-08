import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Signup= () => {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassowrd]=useState('')
    const [repassword,setRepassowrd]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
            if(name && email && (password===repassword))
            {
                e.preventDefault()
                const signup={name,email,password}
                const response=await fetch('http://localhost:8000/api/signup',{
                   method:'POST',
                   body:JSON.stringify(signup),
                   headers:{
                       'Content-Type':'application/json'
                   }
               })
               const json=await response.json()
               alert(json.msg);
               navigate('/')
               if(!response.ok){
                   setError(json.error)
               }
               else{setName('')
               setEmail('')
               setPassowrd('')
               setRepassowrd('')
               setError(null)
               }
                
            }
            else{
                alert("Enter same PASSWORD")
            }
        
    }
  return (
    <div className='d-inline-flex flex-column' style={{margin:" 8% 35%"}}>
         <div className='login-header'>
            <h1 className='chel'>SIGN UP</h1>
        </div>
        <input className='login-text'  type='text' placeholder='Name ' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input className='login-text' type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input className='login-text' type='text' placeholder='Password' value={password} onChange={(e)=>setPassowrd(e.target.value)}></input>
        <input className='login-text' type='text' placeholder='Re-Enter password' value={repassword} onChange={(e)=>setRepassowrd(e.target.value)}></input>
        <button className='login-button-yellow' onClick={handleSubmit} >Sign Up</button> 
    
    </div>
  )
}
