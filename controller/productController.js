const bcrypt = require('bcryptjs');
const multer = require('multer');
const auth = require('jsonwebtoken');

const Product = require('../model/productModel');

exports.newProduct = (req,res,next) =>{
          console.log(req.body);
const newProduct = new Product({
          productName: req.body.productName,
          productCode: req.body.productCode,
          productAvailability: req.body.productAvailability,
          productPrice: req.body.productPrice,
          materialUsed: req.body.materialUsed,
          productImage: req.file.filename,
          productQuantity: req.body.productQuantity,
          productDescription: req.body.productDescription,
          productMadeDate: req.body.productMadeDate,
})
newProduct.save().then(res.send("Product added"))
.catch(err=>res.send(err))}

exports.products = (req,res,next)=>{
          Product.find().then(product=>{
                    res.send(product)
          }).catch(err=>res.send(err))
}

