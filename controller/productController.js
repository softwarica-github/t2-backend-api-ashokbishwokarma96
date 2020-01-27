const bcrypt = require('bcryptjs');
const multer = require('multer');
const auth = require('jsonwebtoken');

const Product = require('../model/productModel');

exports.product = (req,res,next) =>{
const newProduct = new Product({
          productName: req.body.productName,
          productCode: req.body.productCode,
          productAvailability: req.body.productAvailability,
          productPrice: req.body.productPrice,
          materialUsed: req.file.materialUsed,
          productImage: req.file.filename,
          productQuantity: req.file.productQuantity,
          productDescription: req.file.productDescription,
          productMadeDate: req.file.productMadeDate,
})
newProduct.save()
}