const AddToCart = require('../model/addToCartModel');

exports.cartProduct = (req, res, next) => {
          console.log("ASKOH DAI")
          const add = new AddToCart({
                    userId: req.user._id,
                    productId: req.body.productId,
                    quantity: req.body.quantity

          })
          add.save().then(res.status(201).send("Product added"))
                    .catch(err => res.send("Err" + err))
}

exports.viewCart = (req, res, next) => {
          AddToCart.find().then(cartProduct => {
                    res.send(cartProductnp)
          }).catch(err => res.send(err))
}