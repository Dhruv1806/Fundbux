const express=require('express')
const mongoos=require('mongoose')
const Appointment=require('../models/Appointment')
const router=express.Router()
const app=express()
app.use(express.json())


//get all data
router.get('/Appointment',async(req,res)=>{
    const appoint=await Appointment.find({})
    res.status(200).json(appoint)
})


//POST data
router.post('/Appointment',async(req,res)=>{
    const{name,email,phone,date,time}=req.body
    try{
        const appoint=await Appointment.create({name,email,phone,date,time})
        res.status(200).json(appoint)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})


module.exports=router