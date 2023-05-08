const express=require('express')
const mongoose=require('mongoose')
const Login = require('../models/Signup')
const router=express.Router()
const app=express()
app.use(express.json())


//Post data
    router.post('/login',async (req,res)=>{
        const {email,password}=req.body
        try{
            const userExist=await Login.findOne({email})
            if(userExist.password===password){
                res.status(200).json({msg:"Loged in",user:userExist})
            }
            else{
                res.status(400).json({msg:"Wrong password"})
            }
        }catch(error){
            res.status(400).json({error:error.message})
        }
        // res.json({msg:"POST a  WORKOUTS"})
    })


module.exports=router