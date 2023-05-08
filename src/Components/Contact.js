import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'


export const Contact = () => {
//     const [name,setName]=useState('')
//     const [email,setEmail]=useState('')
//     const [phone,setPhone]=useState('')
//     const [message,setMessage]=useState('')
//     const [subject,setSubject]=useState('')

//     const [error,setError]=useState(null)

//     const handleSubmit=async(e)=>{
//             if(name && email && (password===repassword))
//             {
//                 e.preventDefault()
//                 const contact={name,email,phone,subject,message}
//                 const response=await fetch('http://localhost:8000/api/contact',{
//                    method:'POST',
//                    body:JSON.stringify(contact),
//                    headers:{
//                        'Content-Type':'application/json'
//                    }
//                })
//                const json=await response.json()
//                alert(json.msg);
//                navigate('/')
//                if(!response.ok){
//                    setError(json.error)
//                }
//                else{setName('')
//                setEmail('')
//                setPassowrd('')
//                setRepassowrd('')
//                setError(null)
//                }
                
//             }
//             else{
//                 alert("Enter same PASSWORD")
//             }
        
//     }
  return (
    <>
    <Navbar/>
    <div className='about-background'>
            <div className='About'> 
        <h5  className='chel-white'><strong>Our Mission:</strong>Food, Education, Medicine</h5>
        <br />
        <h1 className='chel-white' style={{fontSize:'400%',zIndex:'31'}}>Contact</h1>
            </div>
        </div>
    <div className='d-flex flex-row'>
        <div className='d-flex flex-column contact-card'>
            <div className='d-flex flex-row '>
                <div className='div-contact-icon' style={{padding:'8%', margin:'2% 5%', borderRadius:'50%'}}><i class="fa fa-envelope contact-icon" style={{fontSize:'137%'}}></i></div>
                <span>
                    <h5 style={{fontFamily:"Chelsea Market"}}>Email Address</h5>
                    <p>Send mail any time</p>
                </span>
            </div>
            <div style={{paddingLeft:'8%', paddingTop:'3%'}}>
                <h6>info@example.com</h6>
                <h6>jobs@example.com</h6>
            </div>
        </div>
        <div className='d-flex flex-column contact-card'>
            <div className='d-flex flex-row ' >
                <div className='div-contact-icon' style={{padding:'8%', margin:'1% 4%', borderRadius:'50%'}}><i class="fa fa-phone contact-icon" style={{fontSize:'140%'}}></i></div>
                <span>
                    <h5 style={{fontFamily:"Chelsea Market"}}>Phone Number</h5>
                    <p>call us asap anytime</p>
                </span>
            </div>
            <div style={{paddingLeft:'8%', paddingTop:'3%'}}>
                <h6>info@example.com</h6>
                <h6>jobs@example.com</h6>
            </div>
        </div>
        <div className='d-flex flex-column contact-card'>
            <div className='d-flex flex-row '>
                <div className='div-contact-icon' style={{padding:'7%', margin:'2% 5%', borderRadius:'50%'}}><i class="material-icons contact-icon" style={{fontSize:'161%'}}>pin_drop</i></div>
                <sapn>
                    <h5 style={{fontFamily:"Chelsea Market"}}>Office Address</h5>
                    <p>welcome to our house</p>
                </sapn>
            </div>
            <div style={{paddingLeft:'8%',paddingTop:'3%'}}>
                <h6>B2, Miranda City Tower New York, US</h6>
            </div>
        </div>
    </div>
    <div>
        <div className='d-flex flex-column' style={{textAlign:'center'}}>
            <div>
                <h1 className='chel' style={{color:'#00baa3', fontSize:'325%', margin:'7% 1%'}}>Get in touch</h1>
            </div>
            <div className='d-flex flex-row'>
                <div className='d-flex flex-column ' style={{margin:'1% 4%'}}>
                    <div style={{marginBottom:'10%'}}>
                        <h6>Full Name</h6>
                        <input className='about-text' type="text" placeholder='Full Name' />
                    </div>
                    <div style={{marginBottom:'10%'}}>
                        <h6>Phone Number</h6>
                        <input className='about-text' type="text" placeholder='Phone Number' />
                    </div>
                </div>
                <div className='d-flex flex-column' style={{margin:'1% 4%'}}>
                    <div style={{marginBottom:'10%'}} >
                        <h6>Email Address</h6>
                        <input className='about-text' type="text" placeholder='Email Address' />
                    </div>
                    <div>
                        <h6>Subject</h6>
                        <input className='about-text' type="text" placeholder='Subject' />
                    </div>
                </div>
            </div>
                <div>
                    <h6>Enter Message</h6>
                    <input className='about-text' type="text" placeholder='Enter Message' style={{width:'1134px',padding:'2%', marginBottom:'5%'}} />
                </div>
                <div>
                    <button className='get-quote'>Get A Quote </button>
                </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
