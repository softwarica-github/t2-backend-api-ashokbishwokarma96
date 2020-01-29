const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const uploads=require('./controller/upload');

const users = require('./route/userRoute');
const products = require('./route/productRoute');
const main = require('./route/mainRoute');
const authentication = require('./authentication')

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

app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res,next)=>{
          res.send("This is home page.")
})
app.use("/upload",uploads,(req,res)=>{
res.json(req.file);
})
app.use("/users",users);
app.use("/",main);
app.use("/products",authentication.verifyUser,authentication.verifyAdmin,products);

// app.use("/products",product);
// app.use("/booking",booking);

app.listen(process.env.PORT,()=>{
          console.log("Server Running. "+ process.env.PORT);
})