const AddToCart = require('../model/addToCartModel');

exports.addToCart = (req, res, next) => {
          console.log(req.user.email)
          console.log(req.body)
          const add = new AddToCart({
                    userEmail: req.user.email,
                    productImage: req.body.productImage,
                    productName: req.body.productName,
                    productPrice: req.body.productPrice,
                    quantity: req.body.quantity
          })
          add.save().then(response=>res.status(201).send("Product added"))
                    .catch(err => res.send("Err" + err))
}

exports.viewCart = (req, res, next) => {
          AddToCart.find().then(cartProduct => {
                    res.send({message:"cartProductnp",cartProduct})
          }).catch(err => res.send(err))
}

exports.viewMyCart = (req, res, next) => {
         
          AddToCart.find({userEmail: req.user.email}).then(cartProduct => {
                    console.log(cartProduct);
                    res.send(cartProduct)
          }).catch(err => res.send(err))
}

exports.deleteCart=(req, res,next) => {
          AddToCart.findByIdAndDelete(req.params.id)
              .then(function(result) {
                res.status(201).json({
                  message: "Product Deleted Successfully"
                });
              })
              .catch(function(e) {
                console.log(e);
              });
        }