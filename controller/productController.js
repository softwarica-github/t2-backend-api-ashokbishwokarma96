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
newProduct.save().then(res.send("Product added"))
.catch(err=>res.send(err))}

exports.products = (req,res,next)=>{
          Product.find().then(product=>{
                    res.send(product)
          }).catch(err=>res.send(err))
}
exports.update = (req, res, next) => {
          uid = req.params._id;
          console.log(uid)
          //   console.log(uid);
          Recipe.update(
            { _id: uid },
            {
              $set: {
                    productName: req.body.productName,
                    productCode: req.body.productCode,
                    productAvailability: req.body.productAvailability,
                    productPrice: req.body.productPrice,
                    materialUsed: req.file.materialUsed,
                    productImage: req.file.filename,
                    productQuantity: req.file.productQuantity,
                    productDescription: req.file.productDescription,
                    productMadeDate: req.file.productMadeDate,
              }
            }
          )
            .then(function (recipe) {
              res.status(201).json({
                message: "Product Updated Successfully"
              });
            })
            .catch(function (e) {
              res.status(422).json({
                message: "Update unsuccesfull:" + e
              });
            });
        }
      
        
        exports.delete=(req, res,next) => {
          Recipe.findById(req.params._id).then(user => {
                user
              .delete()
              .then(function(result) {
                res.status(201).json({
                  message: "recipe Deleted Successfully"
                });
              })
              .catch(function(e) {
                console.log(e);
              });
          });
        }