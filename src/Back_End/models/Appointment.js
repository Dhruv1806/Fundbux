const mongoose=require('mongoose')
const Schema=mongoose.Schema

const AppointmentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Appointment',AppointmentSchema)