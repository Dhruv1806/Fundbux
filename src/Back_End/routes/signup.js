const express=require('express')
const mongoose=require('mongoose')
const Login = require('../models/Signup')
const router=express.Router()
const app=express()
app.use(express.json())




//Get all data
router.get('/signup',async(req,res)=>{
    const login=await Login.find({}).sort({createdAt:-1})
   res.status(200).json(login)
})



//Post data
router.post('/signup',async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const user= await Login.findOne({email})
        if(user){
            res.status(400).json({msg:"user exist"})
        }
        else{
            const login=await  Login.create({name,email,password})
            res.status(200).json({msg:"account created successfully"})
        }
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
module.exports=router