const express = require('express');
const cartController = require('../controller/AddToCartController');
const route = express.Router();
const authentication = require('../authentication')


route.route('/')
.get(cartController.viewCart)
.post(authentication.verifyUser,cartController.addToCart)

route.get('/mycart',authentication.verifyUser,cartController.viewMyCart)

route.delete('/:id',authentication.verifyUser,cartController.deleteCart);

module.exports= route;