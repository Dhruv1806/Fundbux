const express=require('express')
const mongoos=require('mongoose')
const Contact=require('../models/Contact')
const router=express.Router()
const app=express()
app.use(express.json())



router.get('/contact',async(req,res)=>{
    const contact=await Contact.find({})
    res.status(200).json(contact)
})

router.post('/contact',async(req,res)=>{
    const{name,email,phone,subject,message}=req.body
    try{
        const contact=await Contact.create({name,email,phone,subject,message})
        res.status(200).json(contact)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})


module.exports=router