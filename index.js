const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const uploads=require('./controller/upload');

const users = require('./route/userRoute');
const products = require('./route/productRoute');
const main = require('./route/mainRoute');
const authentication = require('./authentication');
const cart = require('./route/addToCartRoute');

const app = express();

mongoose.connect(process.env.DATABASE,{
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
}).then(()=>{
          console.log("DB CONNECTED "+process.env.DATABASE)
}).catch(err=>{
          console.log("ERROR "+err)
});

// for handliing cors errors
app.use((req, res, next) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Headers",
            "Origin,X-Requested-With,Content-Type,Authorization"
          );
          if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
            return res.status(200).json({});
          }
          next();
        });

app.use(express.static(__dirname+"/public"));
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use("/upload",uploads,(req,res)=>{
res.json(req.file);})

app.use("/users",users);
app.use("/",main);
app.use("/products",products);
// ,authentication.verifyUser,authentication.verifyAdmin

app.use("/cart",cart);

app.listen(process.env.PORT,()=>{
          console.log("Server Running. "+ process.env.PORT);
})