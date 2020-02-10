const mongoose = require('mongoose');

const productData = mongoose.Schema({
          productName: {
                    type: String,
                    required: true
          },
          productCode: {
                    type: String,
                    required: true
          },
          productAvailability: {
                    type: String,
                    required: true
          },
          productPrice: {
                    type: Number,
                    required: true
          },
          materialUsed: {
                    type: String,
                    required: true
          },
          productImage: {
                    type: String,
                    required: false
          },
          productQuantity: {
                    type: String,
                    required: true
          },
          productDescription: {
                    type: String,
                    required: true
          },
          productMadeDate: {
                    type: String,
                    required: true
          }
})

module.exports = mongoose.model("Products",productData)