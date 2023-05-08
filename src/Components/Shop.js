import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useEffect } from 'react'
import { useState } from 'react'


export const Shop = () => {
    const [count,SetCount]=useState(0)
    const [product,setProduct]=useState(null)
    useEffect(()=>{
        const fetchProuct=async()=>{
            const response=await fetch('http://localhost:8000/api/shop')
            const json=await response.json()
            if (response.ok){
                setProduct(json)
                // console.log(product)
            }
            else{
                console.log("PRODUCT NOT FETCHED");
            }
        }
        fetchProuct()
    },[])
  return (
    <>
   <Navbar/>
   <div className='about-background'>
        <div className='About'> 
                <h5  className='chel-white'><strong>Our Mission:</strong>Food, Education, Medicine</h5>
            <br />
            <h1 className='chel-white' style={{fontSize:'400%',zIndex:'31'}}>Shop</h1>
        </div>
    </div>
    {/* <div style={{margin:'2% 0% 0% 94%'}}>
    <i class="fa fa-shopping-cart" style={{fontSize:'217%', marginTop:'1%'}}></i>
    <h4 style={{marginTop:'-73%',marginLeft:'4%',backgroundColor:'#d55342', height:'32px',width:'32px',textAlign:'center',color:'white', borderRadius:'50%'}}>{count}</h4>
    </div> */}
    
    <div style={{margin:"6% 0% 6% 4%"}}>
        {product && product.map((cur)=>{
            if(cur.sale==="Sale"){
                return(
                    <div className='d-inline-flex flex-column item-card '>
                    <div className='item-sale'>Sale</div>
                <div>
                    <img className='picture-size' src={cur.productUrl} alt="" />
                </div>
                <div>   
                    <br />
                    <h4 className='chel'>{cur.title}</h4>
                    <p style={{color:"#77a464"}}>{cur.price}</p>
                    <button className='item-button'>Add To Cart</button>
                </div>
            </div>
                )
            }
            else{
                return(
                    <div className='d-inline-flex flex-column item-card '>
                <div>
                    <img className='picture-size' src={cur.productUrl} alt="" />
                </div>
                <div>   
                    <br />
                    <h4 className='chel'>{cur.title}</h4>
                    <p style={{color:"#77a464"}}>{cur.price}</p>
                    <button className='item-button' onSubmit={()=>SetCount(1)}>Add To Cart</button>
                </div>
            </div>
                )
            }
        })} 
    </div>
   <Footer/>
    </>
  )
}
