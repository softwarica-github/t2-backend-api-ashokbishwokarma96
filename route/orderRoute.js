const express = require('express');
const orderController = require('../controller/orderController');
const route = express.Router();
const authentication = require('../authentication')


route.route('/')
.get(orderController.viewOrder)
.post(authentication.verifyUser,orderController.addOrder)

// route.get('/mycart',authentication.verifyUser,cartController.viewMyCart)

route.delete('/:id',authentication.verifyUser,orderController.deleteOrder);

module.exports= route;