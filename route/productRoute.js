const express = require('express');
const prductController = require('../controller/productController');
const route = express.Router();

const upload = require('../controller/uploadController');
route.get("/",(req,res,next)=>{
          res.send("Products route")
})

route.route('/product')
.get((req,res,next)=>{
          res.send("Products page")
})
.post(upload,prductController.product);
module.exports= route;