// const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const auth = require('jsonwebtoken');
const User = require('../model/userModel');

exports.signup = (req, res, next) => {
          let password = req.body.password;

          bcrypt.hash(password, 10, function(err,hash) {
                    if (err) {
                              return new Error("no encryption " + err);
                    }
                    else {
                              console.log(hash);
                              const newUser = new User({
                                        name: req.body.name,
                                        email: req.body.email,
                                        password: hash,
                                        phone: req.body.phone,
                                        image: req.body.image,
                              })

                              newUser.save()
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
                    }
          })
}

exports.login = (req, res, next) => {

}

