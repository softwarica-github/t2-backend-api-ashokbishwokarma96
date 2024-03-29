const mongoose = require('mongoose');

const userData = mongoose.Schema({
          name: {
                    type: String,
                    reqired: true
          },
          email: {
                    type: String,
                    reqired: true,
                    unique: true
          },
          phone: {
                    type: Number,
                    reqired: true,
                    unique: true
          },

          password: {
                    type: String,
                    reqired: true
          },
          image: {
                    type: String,
                    default:"noimage.jpg"
                    
          },
          admin:{
                    type:Boolean,
                    default:false
          }
})

module.exports = mongoose.model('User', userData)