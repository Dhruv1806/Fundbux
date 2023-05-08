const express=require('express')
const Workout=require('../Models/Workout')
const { default: mongoose } = require('mongoose')

const router=express.Router()

//Get All Workouts
router.get('/',async (req,res)=>{
   const workout=await Workout.find({}).sort({createdAt:-1})
   res.status(200).json(workout)

})

//Get Single Workouts
router.get('/:id',async (req,res)=>{
    const {id}= req.params
    const workout= await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
})

//POST a new Workouts
router.post('/',async (req,res)=>{
    const {title,load,reps}=req.body
    try{
        const workout=await  Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    // res.json({msg:"POST a  WORKOUTS"})
})

//DELETE a Workouts
router.delete('/:id',async (req,res)=>{
    const {id}= req.params
    // if(!mongoose.Types.ObjectId.isValid(id)){
    // }
    const workout= await Workout.findOneAndDelete({_id:id})
    res.status(400).json({Deleted:'Workout deleted'})
})

//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:"UPDATE a WORKOUTS"})
})

module.exports=router