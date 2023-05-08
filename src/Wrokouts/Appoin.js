import React, { useState } from 'react'

export const Appoin = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const [error,setError]=useState(null)
    const handleSubmit=async(e)=>{
        e.preventDefault()
         console.log("inside handle submiit");
        const Appointment={name,email,phone,date,time}

        const response=await fetch('http://localhost:8000/api/Appointment',{
            method:'POST',
            body:JSON.stringify(Appointment),
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(response);
        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        else{
            setName('')
            setEmail('')
            setPhone('')
            setDate('')
            setTime('')
            console.log('new workout added',json);
        }
    }


  return (
    <div>
        <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        {console.log(name)}
        <br />
        <br />
        <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <input type='text' placeholder='Phone'value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <br />
        <input type='text' placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/>
        <br />
        <br />
        <input type='text' placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
