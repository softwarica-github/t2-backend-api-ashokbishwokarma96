const express = require('express');
const userController = require('../controller/userController')
const route = express.Router();

const upload = require('../controller/uploadController');
route.get("/",(req,res)=>{
          res.send("Users route")
})

route.route('/signup')
.get((req,res,next)=>{
          res.send("SIGNUP PAGE")
})
.post(upload,userController.signup);

route.route('/login')
.get((req,res,next)=>{res.send("Login PAGE")})
.post(userController.login);

module.exports = route;