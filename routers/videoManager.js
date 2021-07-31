const express = require('express');
// const { Model } = require('mongoose');
const router = express.Router();
const Model= require('../models/videoModel');





router.post("/add" , (req,res) => {
console.log(req.body);

new Model(req.body).save()
.then( () => {
    console.log('video data saved');
    res.json({ message : 'success'});
})
.catch( (err) => {
    console.error(err);
    res.json(err);
})
 


})


router.get("/getbyuser/:userid" , (req,res) => {

    Model.find({ user: req.params.userid}).populate('shared')
   .then( (data) => {
       console.log('user data saved');
       res.json(data);
   })
   .catch( (err) => {
       console.error(err);
       res.json(err);
   })
    
   
   
   })

   router.get("/getbyid/:id" , (req,res) => {

    Model.findById( req.params.id)
   .then( (data) => {
       console.log('Video data fetched');
       res.json(data);
   })
   .catch( (err) => {
       console.error(err);
       res.json(err);
   })
    
   })

   router.put("/pushupdate/:id" , (req,res) => {

    Model.findByIdAndUpdate( req.params.id,{$push:req.body})
   .then( (data) => {
       console.log('Video data fetched');
       res.json(data);
   })
   .catch( (err) => {
       console.error(err);
       res.json(err);
   })
    
   })

module.exports=router;