const bcrypt = require('bcryptjs');
const multer = require('multer');

const Product = require('../model/productModel');

const newProduct = new Product({
          productName: req.body.name,
          productCode: req.body.email,
          productAvailability: hash,
          productPrice: req.body.phone,
          materialUsed: req.file.filename,
})