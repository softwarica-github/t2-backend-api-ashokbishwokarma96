const mongoose = require('mongoose');

const productData = mongoose.Schema({
          productName: {
                    type: String,
                    reqired: true
          },
          productCode: {
                    type: String,
                    reqired: true
          },
          productAvailability: {
                    type: String,
                    reqired: true
          },
          productPrice: {
                    type: Number,
                    reqired: true
          },
          materialUsed: {
                    type: String,
                    reqired: true
          },
          productImage: {
                    type: String,
                    reqired: true
          },
          productQuantity: {
                    type: String,
                    reqired: true
          },
          productDescription: {
                    type: String,
                    reqired: true
          },
          productMadeDate: {
                    type: String,
                    reqired: true
          }
})

module.exports = mongoose.model("Products",productData)