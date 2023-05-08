import React ,{useEffect,useState}from 'react'
import background from '../Components/Images/slide2.jpg'
import supportGirl from '../Components/Images/support_girl.jpg'
import earth from '../Components/Images/support_icon.png'
import letter from '../Components/Images/envalope.png'
import aboutG from '../Components/Images/about_girl.jpg'
import aboutW from '../Components/Images/about_woman.jpg'

import cause1 from './Images/cause7.jpg'
import cause2 from './Images/p2.jpg'
import cause3 from './Images/p1.jpg'
import BW from './Images/boy_water.jpg'
import BI1 from './Images/block-icon1.png'
import BI2 from './Images/block-icon2.png'

import child_video from './Images/child_video_bg.jpg'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export const Home = ({setUser,user}) => {
  console.log(user);
  const [start,setStart]=useState(false)
  return (
    <>
    <Navbar/>
    <div>
        <button type="button" class="btn btn log-out" onClick={()=>{setUser(false)}}>Log Out</button>
      <img src={background} className='background' alt=" image"  style={{width:"115%", position:'relative', overflowX:'hidden' }}/>
    </div>
    <div>
    <div className='mission' style={{position:'absolute',  padding: '22% 4% 0% 4%',}}>
      <div className='d-inline-flex p-2' style={{marginRight:'46%' }}>
        <div >
        <h5  className='chel-white'><strong>Our Mission:</strong>Food, Education, Medicine</h5>
        <h1 className='chel-white' style={{fontSize:'400%',zIndex:'31'}}>We'are On A Mission To Change World</h1>
        <button type="button" class="btn  hover-blue rounded-pill border border-white m-3 ps-4 pe-4 " ><h5>View Causes</h5></button>
        <button type="button" class="btn border border-white hover-blue rounded-pill m-3 ps-4 pe-4" ><h5>Donate Now</h5></button>
        </div>
      </div>
    </div>
    <div>
    <div style={{position:'absolute',marginTop:'-10%', width:'100%', color:'white'}} >
        <div class="d-flex flex-row mb-3">
        <div class="p-2"><div class="d-flex flex-column mb-3">
          <div class=""><img src={supportGirl} alt="girl" /></div>
          <div class=" peach">
            <h6>
              Trending Causes
            </h6>
            <h3 style={{fontFamily:'Chelsea Market'}}>Make A Support</h3>
          </div>
        </div>
      </div>
        <div class="p-2 m-2 block" style={{backgroundColor:'#d55342'}}>
          <div style={{marginBottom:'15%'}}>
            <img src={earth} alt="" style={{margin:'20% 38%'}}/>
            <h6>Trending Casuse</h6>
            <h2 style={{fontFamily:'Chelsea Market'}}>Explore Causes</h2>
            <button type="button" class="btn border border-white hover-blue rounded-pill m-3 ps-4 pe-4" style={{}} ><h5>Check it out</h5></button>
          </div>
        </div>
        <div class="p-2 m-2 block " style={{backgroundColor:'#EFC94C'}} >
          <div style={{marginBottom:'15%'}}>
            <img src={letter} alt="" style={{margin:'20% 38%'}}/>
            <h6>Subscribe</h6>
            <h2 style={{fontFamily:'Chelsea Market'}}>Get Updates</h2>
            <button type="button" class="btn border border-white hover-blue rounded-pill m-3 ps-4 pe-4" ><h5>News Letter</h5></button>
          </div>
        </div>
      </div>
 {/* 44k dollor */}
      <div className='d-flex' style={{color:'black',marginTop:'12%',position:'absolute'}}>
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
       { start && <CountUp className='counter-32' start={0} end={32} duration={5} delay={5}>32</CountUp> }
        </ScrollTrigger>
        
        <h1 style={{fontSize:'100%' ,color:"white"}}>years of Experience</h1>
        </div>
      </div>
      {/* Good History */}
      <div style={{backgroundColor:'#f8f8f8', margin:'7% 0%', width:'100%'}}>
        <div className='d-flex flex-column'>
          <div>
            <h1 className='chel' style={{fontSize:'355%', margin:'9% 24%', textAlign:'center'}}>Its About Impact, <span style={{color:'#D55342'}}>good </span>History</h1>
          </div>
          <div className='d-flex flex-row' style={{}}>
            <div className='text-center chel m-2 gren-box'>
              <img className='cause' src={cause1} alt="" />
              <div className='text-center chel '>
              <button type="button" className="green-btn btn m-3">Education</button>
              <h3>Little Help That Goes A Long Way</h3>
              <span></span>
              <h5 className='d-inline' style={{margin: '0% 16%'}}>116%</h5>
              <span></span>
              <h5 className='d-inline'>$119,000.00 Goal</h5>
              </div>
            </div >
            <div className='text-center chel m-2 gren-box'>
              <img className='cause' src={cause2} alt="" />
              <div>
              <button type="button" className="gren btn m-3">Food</button>
              <h3>Lifeskills For Children In South Africa</h3>
              <span></span>
              <h5 className='d-inline' style={{margin: '0% 16%'}}>87%</h5>
              <h5 className='d-inline'>$680,000.00 Goal</h5>
              </div>
            </div>
            <div className='text-center chel m-2 gren-box' >
              <img className='cause' src={cause3} alt="" />
              <div>
              <button type="button" className="gren btn m-3">Food</button>
              <h3>Contribute for the help Nigerian Grils<i class="fa-thin fa-signal-bars"></i></h3>
              <span></span>
              
              <h5 className='d-inline' style={{margin: '0% 16%'}}>61%</h5>
              <h5 className='d-inline'>$210,000.00 Goal</h5>
              

              </div>
            </div>
          </div>
        </div>
      </div>
{/* boy with water */}
      <div className='d-flex' style={{color:'black'}}>
        <div>
          <img src={BW} alt=""  style={{margin:'5%', width:'90%'}}/>
        </div>
        <div >
          <div className='d-flex flex-row' style={{alignItems:'center'}}>
            <div className='icon-heart'>
              <img style={{padding:'21%'}} src={BI1} alt="" />
            </div>
              <div style={{margin:'4% 10%'}}>
              <h1>A place in history</h1>
              <p>Many of us have no idea what it"s like to be thirsty. We have plenty of water to drink even our toilets is clean!</p>
              </div>
          </div>
          <div className='d-flex flex-row' style={{alignItems:'center'}}>
            <div className='icon-heart'>
                <img style={{padding:'21%'}} src={BI2} alt="" />
            </div>
              <div style={{margin:'4% 10%'}}>
              <h1 >A place in history</h1>
              <p>Many of us have no idea what it"s like to be thirsty. We have plenty of water to drink even our toilets is clean!</p>
              </div>
          </div>
        </div>
      </div>
      {/* video */}
      <div className='chel' style={{margin:'5% 0%'}}>
        <div>
          <div style={{position:'absolute', backgroundColor:'#000000d6', opacity:'.6',width:'100%', height:'313px'}}>
          </div>
          <h1 style={{position:'absolute',color:'white',  fontSize:'418%', padding:'5% 34% 7% 4%'}}>Joel Orphanage Of Ministry Uganda</h1>
          <div style={{position:'absolute', backgroundColor:'#f86048', opacity:'1',width:'11%',height:"4%" ,borderRadius:'50%',margin:'7% 78%'}}>
          <i class="fa fa-play " style={{margin: "44%"}}></i>
          </div>
          <img src={child_video} style={{width:'122%'}} alt="" />
        </div>
      </div>
  <Footer/>
      </div>
      </div>
  </div>
    
    </>

  )
}
