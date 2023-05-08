import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useState } from 'react'

export const News = () => {
  const [news,setnews]=useState(null)
  useEffect(()=>{
          const fetchWorkout=async()=>{
            const response=await fetch('http://localhost:8000/api/news')
            const json=await response.json()
            if(response.ok){
                 setnews(json)    
                 console.log(json);
            }
          }
          fetchWorkout()
        },[])
  return (
    <>
    <Navbar/>
    <div className='about-background'>
            <div className='About'> 
        <h5  className='chel-white'><strong>Our Mission:</strong>Food, Education, Medicine</h5>
        <br />
        <h1 className='chel-white' style={{fontSize:'400%',zIndex:'31'}}>News</h1>
            </div>
        </div>
        <div>
        {news && news.map((cur)=>{
            return(
                <>
               <div className='d-inline-flex flex-column' style={{width:"65%",margin:"4% 17%" , border:"3px solid #e9ecef"}} > 
          <div className='d-inline-flex '>
            <img src={cur.imgUrl} alt="img" style={{width:"820px"}} />
          </div>
          <div className='m-5 ' >
          <button type="button" class="btn news-button" style={{margin:"1%"}}>{cur.type1}</button>
          <button type="button" class="btn news-button" style={{margin:"1%"}}>{cur.type2}</button>
            <br />
           
            <h1 className='chel' style={{fontSize:'275%'}}>{cur.heading}</h1>
            <p style={{fontWeight:"600"}}><i className='far fa-calender'/>{cur.date}</p>
            <p style={{fontSize:'112%', fontWeight:'400'}}>{cur.para}</p>
          </div>
        </div>
                </>
            )
        })}
    </div>
        <Footer/>
    </>
  )
}
