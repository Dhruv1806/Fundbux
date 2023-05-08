const express=require('express')
const mongoos=require('mongoose')
const Shop=require('../models/Shop')
const router=express.Router()
const app=express()
app.use(express.json())



router.get('/shop',async(req,res)=>{
    const shop=await Shop.find({})
    res.status(200).json(shop)
})


router.post('/shop',async(req,res)=>{
    const{productUrl,title,price,sale}=req.body
    try{
        const shop=await Shop.create({productUrl,title,price,sale})
        res.status(200).json(shop)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})


module.exports=router