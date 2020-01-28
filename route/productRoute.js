const express = require('express');
const productController = require('../controller/productController');
const route = express.Router();

const upload = require('../controller/uploadController');
route.get("/",(req,res,next)=>{
          res.send("Products route")
})

route.route('/product')
.get(productController.products)
.post(upload,productController.newProduct);

route.patch('/update/:_id',upload,productController.update);

route.delete('/delete/:_id',productController.delete);
module.exports= route;