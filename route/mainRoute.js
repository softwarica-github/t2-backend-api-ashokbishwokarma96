const express = require('express');
const productController = require('../controller/productController');
const cartController = require('../controller/AddToCartController');
const route = express.Router();
const authentication = require('../authentication')

route.route('/product')
.get(productController.products)

module.exports= route;