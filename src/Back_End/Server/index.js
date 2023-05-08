//Imports
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const LoginRoutes=require('../routes/login')
const SignupRoutes=require('../routes/signup')
const AppointmentRoutes=require('../routes/appointment')
const NewsRoutes=require('../routes/news')
const ShopRoutes=require('../routes/shop')
const ContactRoutes=require('../routes/contact')
const TryRoutes=require('../routes/try')


//MiddleWare
const app=express()
app.use(express.json())
app.use(cors())

  
//Routes
app.use('/api',SignupRoutes)
app.use('/api',AppointmentRoutes)
app.use('/api',LoginRoutes)
app.use('/api',NewsRoutes)
app.use('/api',ShopRoutes)
app.use('/api',ContactRoutes)

app.use('/api',TryRoutes)


//Connect to database
mongoose.connect(process.env.LOGIN_URL)
.then(()=>{
  app.listen(process.env.PORT,()=>
  {
    console.log("Hello from database");
  })
})




























// // const express=require('express')
// // const mongoose=require('mongoose')
// // // const cors=require('cors')
// // const LoginRoutes=require('../Routes/Login')
// // require('dotenv').config();

// // const app=express();

// // //MiddleWare
// // app.use(express.json())
// // // app.use(cors())

// // //Routes
// // app.use('/Login',LoginRoutes)

// // //Connections
// // mongoose.connect(process.env.LOGIN_URL)
// //     .then(()=>{
// //         app.listen(process.env.PORT,()=>{
// //             console.log("hello to database");
// //         })

// //     })


// const express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// require('dotenv').config();


// const app=express()
// app.use(express.json())
// app.use(cors())




// //Connection
// mongoose.connect(process.env.LOGIN_URL)
// .then(()=>{
//   app.listen(process.env.PORT,()=>{
//     console.log("hello to database");
//   })
// })


// //Schema
// const userSchema=mongoose.Schema({
//   name:String,
//   email:String,
//   password:String 
// })
// const User=new mongoose.model('User',userSchema)

// //Routes
// app.get('/login',(req,res)=>{
//   res.send("hello login")
// })

// app.post('/Register',(req,res)=>{
//     // console.log(req.body);
//     const {name,email,password}=req.body
//     User.findOne({email:email},(err, user)=>{
//         if (user){
//             res.send({message:"Already created"})
//         }
//         else{
//           const user=new User({
//             name,
//             email,
//             password
//           })
//           user.save(err=>{
//             if(err){
//               res.send({message:" Succesfully registered"})
//             }
//           })
//         }
//     })
  

// })





