import React from 'react'
import img1 from './Images/footer_img1.jpg'
import img2 from './Images/footer_img2.jpg'
import img3 from './Images/footer_img3.jpg'

export const Footer = () => {
  return (
    <>
    
    <div style={{color:'black', margin:'4%'}} className='d-flex flex-row'>
        {/* Get in touch */}
        <div className='touch'>
            <h5 className='chel' > Get in Touch</h5>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row m-2'>
                    <i class="fa fa-phone" style={{color:'white', backgroundColor:'#efc94c', padding:'5%',fontSize:'130%'}}></i>
                    <span style={{marginLeft:'5%'}}>
                   <span>+91-7687287658</span> 
                    <br />
                    <span>+880-7623458760</span>
                    </span>
                </div>
                <div className='d-flex flex-row m-2'>
                <i class="fa fa-envelope" style={{color:'white', backgroundColor:'#00baa3',padding:'5%'}}></i>
                <span style={{marginLeft:'5%'}}>
                   <span>info@example.com</span> 
                    <br />
                    <span>jobs@example.com</span>
                    </span>
                </div>
                <div className='d-flex flex-row m-2'>
               <i class="material-icons" style={{color:'white', backgroundColor:'#f86048',padding:'4%'}}>pin_drop</i>
                <span style={{marginLeft:'5%', marginRight:'17%'}}>
                16/A, Miranda Halim City Hall New York, US
                </span>
                </div>

            </div>
        </div>
        {/* useful link */}
        <div className='touch'>
            <h5 className='chel'> Useful link</h5>
                <div className='d-flex flex-column'>
                    <div className='red-slide'>About</div>
                    <div className='red-slide'>FAQ</div>
                    <div className='red-slide'>Contact</div>
                    <div className='red-slide'>Teams</div>
                    <div className='red-slide'>Events</div>
                    <div className='red-slide'>Donation</div>
                    <div className='red-slide'>Privacy Policy</div> 
                </div>
        </div>
        {/* News Feed */}
        <div className='touch'>
            <h5 className='chel'>News Feed</h5>
                <div className='d-flex flex-column chel'>
                <div className='d-flex flexx-row m-2'>
                    <img src={img1}  alt="" style={{width:'20%'}} />
                    <h5 style={{marginLeft:'5%'}}>Take Your Online Donation To Next Level!</h5>
                </div>
                <div className='d-flex flexx-row m-2'>
                    <img src={img2} alt="" style={{width:'20%'}}/>
                    <h5 style={{marginLeft:'5%'}}>
                        Provinding Clean Water On the Blue Planet
                    </h5>
                </div>
                <div className='d-flex flexx-row m-2'>
                <img src={img3} alt="" style={{width:'20%'}}/>
                    <h5 style={{marginLeft:'5%'}}>
                        Little Help Goes A Long Way
                    </h5>
                </div> 
                </div>
        </div>
    </div>
    <div style={{color:'black', backgroundColor:'#f0f0f0'}}>
        <p style={{padding:'2% 36%'}}>&#169; <b>FundBox</b> Charity Trust-2023. All rights reserved</p>
    </div>
    </>
  )
}
