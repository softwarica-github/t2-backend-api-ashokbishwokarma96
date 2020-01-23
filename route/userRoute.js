const express = require('express');
const userController = require('../controller/userController')
const route = express.Router();
route.get("/",(req,res)=>{
          res.send("Users route")
})

route.route('/signup')
.get((req,res,next)=>{
          res.send("SIGNUP PAGE")
})
.post(userController.signup);

route.route('/login')
.get((req,res,next)=>{
          res.send("Login PAGE")
})

module.exports = route;