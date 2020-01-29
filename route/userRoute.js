const express = require('express');
const userController = require('../controller/userController')
const route = express.Router();

const upload = require('../controller/uploadController');
route.get("/",(req,res)=>{
          res.send("Users route")
})

// Route for User Signup
route.route('/signup')
.get((req,res,next)=>{
          res.send("SIGNUP PAGE")
}).post(userController.signup);

//Route for User Login
route.route('/login')
.get((req,res,next)=>{res.send("Login PAGE")})
.post(userController.login);

//Route for User Update
route.patch('/update/:_id',upload,userController.update);

//Route for User Delete
route.delete('/delete/:_id',userController.delete);

//Exporting main route of user
module.exports = route;