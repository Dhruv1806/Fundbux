const mongoose=require('mongoose')
const Schema=mongoose.Schema

const shopeSchema=new Schema({
    productUrl:String,
    title:String,
    price:String,
    sale:String
 })
 

module.exports=mongoose.model('Product',shopeSchema)