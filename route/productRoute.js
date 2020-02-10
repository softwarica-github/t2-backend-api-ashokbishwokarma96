const express = require('express');
const productController = require('../controller/productController');
const route = express.Router();

const upload = require('../controller/uploadController');


route.route('/')
.post(upload,productController.newProduct)
.get(productController.products);

route.route('/:_id')
.patch(upload,productController.update)
.delete(productController.delete)
.get(productController.product)

module.exports= route;