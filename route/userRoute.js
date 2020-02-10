const express = require('express');
const userController = require('../controller/userController')
const route = express.Router();
const auth = require("../authentication")

const upload = require('../controller/uploadController');

route.get('/',userController.allusers)

// Route for User Signup
route.route('/signups')
.post(upload,userController.signups);

route.route('/signup')
.post(userController.signup);

// route.post('/upload',upload);

/*Route for User Login*/
route.route('/login')
.post(userController.login);

route.get("/me",auth.verifyUser,userController.me)

//Route for User Update
route.route('/:_id')
.patch(upload,userController.update)
.delete(userController.delete)

//Exporting main route of user
module.exports = route;