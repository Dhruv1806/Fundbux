const express=require('express')
const mongoos=require('mongoose')
const News=require('../models/News')
const router=express.Router()
const app=express()
app.use(express.json())



router.get('/news',async(req,res)=>{
    const news=await News.find({})
    res.status(200).json(news)
})

router.post('/news',async(req,res)=>{
    const{imgUrl,type1,type2,heading,date,para}=req.body
    try{
        const news=await News.create({imgUrl,type1,type2,heading,date,para})
        res.status(200).json(news)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})


module.exports=router