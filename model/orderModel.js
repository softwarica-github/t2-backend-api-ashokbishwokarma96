const mongoose = require('mongoose');

const addOrderSchema = new mongoose.Schema({
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
module.exports= mongoose.model("Add Order",addOrderSchema);