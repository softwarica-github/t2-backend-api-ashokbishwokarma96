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
          User.findOne({email:req.body.email}, function(err,user){
             if (err) {
              console.log(req.body.email);
                 } 
                 else if(user) {
                   if(bcrypt.compareSync(req.body.password, user.password)) {
             // user.generateAuthToken();
              const token = auth.sign({id: user._id},process.env.TOKEN);
              res.status(201).json({
                token:token,
                id: user._id,
                name: user.name,
               // last_name: user.last_name,
                email: user.email,
               // gender: user.gender,
              image: user.image,
                password: user.password});
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

