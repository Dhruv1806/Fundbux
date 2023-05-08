
                        //  PRINT WORKOUTS

import React, { useEffect } from 'react'
import { useState } from 'react'

export const WorkRead = () => {
    const [workout,setWorkouts]=useState(null)
    useEffect(()=>{
            const fetchWorkout=async()=>{
              const response=await fetch('http://localhost:8000/api/workouts/')
              const json=await response.json()
              if(response.ok){
                   setWorkouts(json)
                   console.log(json);
              }
            }
            fetchWorkout()
          },[])

  return (
    <div>
        {workout && workout.map((cur)=>{
            return(
                <>
                <h1>{cur.title}</h1>
                <h4>Load:{cur.load}</h4>
                <h4>reps:{cur.reps}</h4>

                </>
            )
        })}
    </div>
  )
}



                                                    //POST workout
// import React from 'react'
// import { useState } from 'react'

// export const WorkRead = () => {
//     const [title,setTitle]=useState('')
//     const [load,setLoad]=useState('')
//     const [reps,setReps]=useState('')
//     const [error,setError]=useState(null)

//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//          console.log("inside handle submiit");
//         const wokout={title,load,reps}

//         const response=await fetch('http://localhost:8000/api/workouts',{
//             method:'POST',
//             body:JSON.stringify(wokout),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//         console.log(response);
//         const json=await response.json()

//         if(!response.ok){
//             setError(json.error)
//         }
//         else{
//             setTitle('')
//             setLoad('')
//             setReps('')
//             setError(null)
//             console.log('new workout added',json);
//         }
//     }

//   return (
//     <div>
//         <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
//         {console.log(title)}
//         <br />
//         <br />
//         <input type='number' placeholder='Loads' value={load} onChange={(e)=>setLoad(e.target.value)}></input>
//         {console.log(load)}
//         <br />
//         <br />
//         <input type='number' placeholder='Reps' value={reps} onChange={(e)=>setReps(e.target.value)}></input>
//         {console.log(reps)}

//         <br />
//         <br />
//         <button onClick={handleSubmit} >Add workout</button> 
    
//     </div>
//   )
// }
