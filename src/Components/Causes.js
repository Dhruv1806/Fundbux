import React, { useState } from 'react'
import { Navbar } from './Navbar'
import cause1 from './Images/cause7.jpg'
import cause2 from './Images/p2.jpg'
import cause3 from './Images/p1.jpg'
import { Footer } from './Footer'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export const Causes = () => {
  const [start,setStart]=useState(false)
  const [width1,setWidth1]=useState(0)
  const [width2,setWidth2]=useState(0)
  const [width3,setWidth3]=useState(0)
  const [width4,setWidth4]=useState(0)
  const [width5,setWidth5]=useState(0)
  const [width6,setWidth6]=useState(0)

  return (
    <>
    <Navbar/>
    <div className='about-background'>
            <div className='About'> 
        <h5  className='chel-white'><strong>Our Mission:</strong>Food, Education, Medicine</h5>
        <br />
        <h1 className='chel-white' style={{fontSize:'400%',zIndex:'31'}}>Our Causes</h1>
            </div>
        </div>
        <div style={{ margin:'10% 0%', width:'100%'}}>
        <div className=''>
          <div className='d-flex flex-row'>
            <div className='text-center chel m-2 gren-box' >
              <img className='cause' src={cause1} alt="" />
              <div className='text-center chel '>
              <button type="button" className="green-btn btn m-3">Education</button>
              <h3>Little Help That Goes A Long Way</h3>
              <ScrollTrigger onEnter={()=>setWidth1(90)}>
              <div className='extend-line' style={{width:`${width1}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              {/* <h5 className='d-inline' style={{margin: '0% 16%'}}>116%</h5> */}
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342',color:'#d55342'}} start={0} end={116} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$119,000.00</h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
        
              </div>
            </div >
            <div className='text-center chel m-2 gren-box'>
              <img className='cause' src={cause2} alt="" />
              <div>
              <button type="button" className="gren btn m-3">Food</button>
              <h3>Lifeskills For Children In South Africa</h3>
              <ScrollTrigger onEnter={()=>setWidth2(78.3)}>
              <div className='extend-line' style={{width:`${width2}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342'}} start={0} end={87} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$680,000.00</h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
              </div>
            </div>
            <div className='text-center chel m-2 gren-box' >
              <img className='cause' src={cause3} alt="" />
              <div>
              <button type="button" className="gren btn m-3">Food</button>
              <h3>Contribute for the help Nigerian Grils<i class="fa-thin fa-signal-bars"></i></h3>
              <ScrollTrigger onEnter={()=>setWidth3(55)}>
              <div className='extend-line' style={{width:`${width3}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342'}} start={0} end={61} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$210,000.00 </h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='d-flex flex-row'>
            <div className='text-center chel m-2 gren-box'>
              <img className='cause' src='https://codexpeed.com/fundbux-wp/wp-content/uploads/2021/08/cause4.jpg' alt="" />
              <div className='text-center chel '>
              <button type="button" className="green-btn btn m-3">Education</button>
              <h3>Gift An Education… Make A Life Better!</h3>
              <ScrollTrigger onEnter={()=>setWidth4(90)}>
              <div className='extend-line' style={{width:`${width4}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342'}} start={0} end={116} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$119,000.00 </h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
              </div>
            </div >
            <div className='text-center chel m-2 gren-box'>
              <img className='cause' src="https://codexpeed.com/fundbux-wp/wp-content/uploads/2021/08/cause5.jpg" alt="" />
              <div>
              <button type="button" className="gren btn m-3">Medicine</button>
              <h3>Help These Children Find Their Smiles</h3>
              <ScrollTrigger onEnter={()=>setWidth5(78)}>
              <div className='extend-line' style={{width:`${width5}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342'}} start={0} end={87} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$680,000.00  </h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
              </div>
            </div>
            <div className='text-center chel m-2 gren-box' >
              <img className='cause' src="https://codexpeed.com/fundbux-wp/wp-content/uploads/2021/08/cause9.jpg" alt="" />
              <div>
              <button type="button" className="gren btn m-3">Medicine</button>
              <h3>Our Donation Is Hope For Poor Children’s<i class="fa-thin fa-signal-bars"></i></h3>
              <ScrollTrigger onEnter={()=>setWidth6(55)}>
              <div className='extend-line' style={{width:`${width6}%`, transition:'2s'}}></div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={()=>setStart(true)} >
                 { start && <CountUp className='d-inline' style={{margin: '0% 1%',fontSize:"1.25rem",color:'#d55342'}} start={0} end={61} duration={4}/>}<span style={{color:"#d55342",fontSize:"110%"}}>%</span><span style={{fontFamily:"initial",fontSize:"80%"}}>Raised</span>
              
              <h5 className='d-inline' style={{marginLeft:"30%",color:"#00baa3"}}>$210,000.00 </h5><span style={{fontFamily:"initial", fontSize:'80%'}}>Goal</span>
               </ScrollTrigger> 
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  )
}
