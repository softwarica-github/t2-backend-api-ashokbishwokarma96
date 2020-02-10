const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
          userEmail: {
                    type: String,
                    reqired: true,
          },
          productImage: {
                    type: String,
                    required: false
          },
          productName: {
                    type: String,
                    required: true
          },
          productPrice: {
                    type: Number,
                    required: true
          },
          quantity: {
                    type: Number,
                    required:true
          }    
})
module.exports= mongoose.model("Add to Cart",addToCartSchema);