const Order = require('../model/orderModel');

exports.addOrder = (req, res, next) => {
          console.log(req.user.email)
          console.log(req.body)
          const add = new Order({
                    userEmail: req.user.email,
                    productImage: req.body.productImage,
                    productName: req.body.productName,
                    productPrice: req.body.productPrice,
                    quantity: req.body.quantity
          })
          add.save().then(response=>res.status(201).send("Product Ordered"))
                    .catch(err => res.send("Err" + err))
}

exports.viewOrder = (req, res, next) => {
          Order.find().then(order => {
                    res.send({message:"order",order})
          }).catch(err => res.send(err))
}

// exports.viewMyCart = (req, res, next) => {
         
//           AddToCart.find({userEmail: req.user.email}).then(cartProduct => {
//                     console.log(cartProduct);
//                     res.send(cartProduct)
//           }).catch(err => res.send(err))
// }

exports.deleteOrder=(req, res,next) => {
          Order.findByIdAndDelete(req.params.id)
              .then(function(result) {
                res.status(201).json({
                  message: "Order Deleted Successfully"
                });
              })
              .catch(function(e) {
                console.log(e);
              });
        }