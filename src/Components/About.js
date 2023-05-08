import React, { useState } from 'react'
import { Navbar } from './Navbar'
import aboutG from '../Components/Images/about_girl.jpg'
import aboutW from '../Components/Images/about_woman.jpg'
import I1918 from './Images/1998.jpg'
import I2008 from './Images/2008.jpg'
import I2010 from './Images/2010.jpg'
import I2016 from './Images/2016.jpg' 
import { Footer } from './Footer'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export const About = () => {
  const [start,setStart]=useState(false)
  return (
    <>
    <Navbar/>
    <div>
        <div className='about-background'>
            <div className='About'> 
              <h5  className='chel-white '><strong>Our Mission:</strong>Food, Education, Medicine</h5>
              <br />
              <h1 className='chel-white ' style={{fontSize:'400%',zIndex:'31'}}>About</h1>
            </div>
        </div>
        <div>
        {/* 44k dollor */}
        <div className='d-flex' style={{color:'black',marginTop:'16%',position:'absolute'}}>
       <div>
        <img src={aboutG} alt="" />
        <img src={aboutW} alt="" style={{margin:'-176% 0% 1% 38%',border:'10px solid white'}}/>
       </div>
       <div>
        <h1 style={{fontFamily:'Chelsea Market', textAlign:'left', fontSize:'323%',marginTop:'27%', marginLeft:'8%'}}>We've Funded <span style={{color: '#00baa3', fontSize: "177%"}}>44K</span>  Dollars Over</h1>
       </div>
      </div>
      {/* 32 years */}
      <div className='d-inline-flex text-black' style={{fontFamily:'Chelsea Market',padding:'3% 2%',backgroundColor:'#00baa3',margin:'38% 0% 0% 32%', position:'relative', width:'17%'}}>
        <div>
        <ScrollTrigger onEnter={()=>setStart(true)} >
       { start && <CountUp className='counter-32' start={0} end={32} duration={5}>32</CountUp> }
        </ScrollTrigger> 
        
        <h1 style={{fontSize:'100%', color:"white"}}>years of Experience</h1>
        </div>
      </div>
        </div>
        {/* TimeLine */}
        <div className='timeline' >
          <div>
            <div className='d-inline-flex flex-column ' style={{backgroundColor:'#e2e0e0',marginRight: "23%" ,marginLeft:"7%"}}>
              <p style={{textAlign:'center'}}><b>1998</b>-Journey Was Started</p>
              <img src={I1918} alt="" />
            </div>
            <div className='d-inline-flex flex-column ' style={{backgroundColor:'#e2e0e0'}}>
              <p style={{textAlign:'center'}}><b>2008</b>-Journey Was Started</p>
              <img src={I2008} alt="" />
            </div>
            <div>
              <div className='about-timeline'></div>
              <div className='d-flex'>
                <div className='circle' style={{margin:"-43px 19% 0% 16%"}}></div>
                <div className='circle' style={{margin:"-43px 15% 0% 3%"}}></div>
                <div className='circle' style={{margin:"-43px 21% 0% 4%"}}></div>
                <div className='circle' style={{marginTop:"-44px"}}></div>

              </div>
            </div>
          </div>
          <div>
            <div className='d-inline-flex flex-column ' style={{backgroundColor:'#e2e0e0',marginRight: "23%" ,marginLeft:"30%"}}>
              <p style={{textAlign:'center'}}><b>2010</b>-Journey Was Started</p>
              <img src={I2010} alt="" />
            </div>
            <div className='d-inline-flex flex-column ' style={{backgroundColor:'#e2e0e0'}}>
              <p style={{textAlign:'center'}}><b>2016</b>-Journey Was Started</p>
              <img src={I2016} alt="" />
            </div>
          </div>
        </div>
        <Footer/>
    </div>
   
    </>
  )
}
