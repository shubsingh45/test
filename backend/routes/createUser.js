const express = require("express")
const userSchema = require('../models/User.js')
const{body, validationResult} = require('express-validator')
const User = require("../models/User.js")

const router = express.Router()

router.post('/createuser',[
    body('email').isEmail(),
    body('password').isLength({min: 5})
],
 async (req, res) => {

    const validation = validationResult(req);
    if(!validation.isEmpty()){
        return res.status(400).json({validation: validation.array()})
    }
    try {
        let user = await userSchema.create(req.body)
       res.json({message: "success"})
       console.log(user)
    } catch (error) {
        console.log("err")
    }
})

router.post('/login', async(req, res) =>{
    let{email, password} = req.body
    try {
      let user =  await User.findOne({email})
      if(!user){
        return res.status(404).json({message: "please check your email"})
      }
      if(!req.body.password === user.password){
        return res.status(404).json({message: "please check your email"})
      }
      return res.json({message: "success login"})

    } catch (error) {
        
    }
})

module.exports = router