const mongoose=require('mongoose')
const Schema=mongoose.Schema

const NewsSchema=new Schema({
   imgUrl:String,
   type1:String,
   type2:String,
   heading:String,
   date:String,
   para:String,
   
})

module.exports=mongoose.model('News',NewsSchema)