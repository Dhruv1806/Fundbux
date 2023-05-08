import React,{useState} from 'react'

export const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:"",
      })
    
      const handleChange = (e )=>{
        const {name,value}=e.target
        setUser({
          ...user,
          [name]:value
        })
      
      }
  return (
    <div>
        <input type='email' name='email' value={user.email} onChange={ handleChange} placeholder='Enter your email'/>
        <br />
        <br />
        <input type='password' name='password' value={user.password} onChange={ handleChange} placeholder='Enter your password'/>
        <br />
        <br />
        <button>Login</button>
    </div>
  )
}
