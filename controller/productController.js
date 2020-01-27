const bcrypt = require('bcryptjs');
const multer = require('multer');

const Product = require('../model/productModel');

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
.then(user=>{
          const token = auth.sign({_id: user._id},process.env.TOKEN);
          res.status(201).send({
                    status: "Success",
                    token: token
          })
})
.catch(err=>{
          res.status(500).send({
                    status: "Failure",
                    error: err
          })
})