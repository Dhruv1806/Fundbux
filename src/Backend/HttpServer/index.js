//For .env file
require('dotenv').config()
//import express    
const express=require("express")
//import mongoose
const mongoose=require('mongoose')
//import routes
const cors=require('cors')
//import route
const WorkoutRoutes=require('../Routes/workouts')



//middle ware   
const app=express()
app.use(express.json())
app.use(cors())





//routes
app.use('/api/workouts',WorkoutRoutes)






//connect to DB
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(8000,()=>{
            console.log("Connacted to database and port ",process.env.PORT);
        })
    })


