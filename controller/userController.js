const bcrypt = require('bcryptjs');
const multer = require('multer');
const auth = require('jsonwebtoken');
const User = require('../model/userModel');

exports.signup = (req, res, next) => {
  console.log(req.body);
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
                                       // image: req.file.filename,
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

exports.signups = (req, res, next) => {
  console.log(req.body);
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
                                       image: req.file.filename,
                                   
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

exports.login=(req, res,next)=> {
  console.log(req.body);
          User.findOne({email:req.body.email}, function(err,user){
             if (err) {
              console.log(req.body.email);
                 } 
                 else if(user) {
                   if(bcrypt.compareSync(req.body.password, user.password)) {
          
              const token = auth.sign({id: user._id},process.env.TOKEN);
              res.status(201).json({
                status:"Login Success!",
                token:token,
                email:user.email,
                admin: user.admin});
                }
                else{res.json({status:"error", message: "Invalid email/password!!!", data:null});}
            }
            else{
              console.log(err);
            res.status(404).json({
                error:"Invalid email/password!!!"
            });
            }
           })
          }

exports.allusers = (req,res,next)=>{
            User.find().then(user=>{
                      res.status(200).send(user)
            }).catch(err=>res.send(err))
  }

exports.update = (req, res, next) => {
            uid = req.params._id;
            console.log(uid)
            //   console.log(uid);
            console.log(req.body)
            User.update(
              { _id: uid },
              {
                $set: {
                  name: req.body.name,
                  email: req.body.email,
                  phone: req.body.phone,
                  image: req.body.image,
                }
              }
            )
              .then(function (user) {
                console.log("User Updated:");
                res.status(201).json({                  
                  message: "User Details Updated Successfully"
                });
              })
              .catch(function (e) {
                res.status(422).json({
                  message: "Unable to Update:" + e
                });
              });
          }

exports.delete=(req, res,next) => {
            User.findById(req.params._id).then(user => {
                  user
                .delete()
                .then(function(result) {
                  res.status(201).json({
                    message: "user Deleted Successfully"
                  });
                })
                .catch(function(e) {
                  console.log(e);
                });
            });
          }

exports.me = async (req, res, next) => {
            try {
              res.status(200).json(req.user);
            } catch (err) {
              res.status(400).json({
                status: "Failure",
                message: err
              });
            }
          };