import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Try2 = ({setMsg,msg}) => {
    return (
    <div>
        <button onClick={()=>{setMsg('1')}}>Try 1</button>
        <h1>{msg}</h1>
        <button onClick={()=>{setMsg('')}}>clear</button>

    </div>
  )
}
