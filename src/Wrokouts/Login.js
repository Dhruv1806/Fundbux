import React, {  useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export const Login = ({setMsg}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const login={email,password}
        const response=await fetch('http://localhost:8000/api/login',{
            method:'POST',
            body:JSON.stringify(login),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        alert(json.msg)
        const user_id=JSON.stringify(json.user._id)
        setMsg(user_id)
        if(!response.ok){
            console.log(json.error)
        }
    }
  return (
    <div>

    <div className='d-inline-flex flex-column ' style={{margin:" 12% 35%"}}>
        <div className='login-header'>
            <h1 className='chel'>LOG IN</h1>
        </div>
        <input className='login-text' type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input className='login-text' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button className='login-button-yellow' onClick={handleSubmit}>Login</button>
        {/* <button className='login-button-red'>Signup</button>  */}
        <button onClick={()=>{navigate('/signup')}} className='login-button-red' >Signup</button> 
     </div>
    </div>
)}