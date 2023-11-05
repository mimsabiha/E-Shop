const express = require('express');
const cors = require("cors");

const db = require('./db');
const app = express();

const ProductsRoute = require('./routes/productRoute');
const UserRoute = require('./routes/userRoute');
const OrderRoute = require('./routes/orderRoute');
const AdminRoute = require('./routes/adminRoute');

app.use(express.json());
app.use(cors());
app.use('/storeAPI/products',ProductsRoute);
app.use('/storeAPI/users/',UserRoute);
app.use('/storeAPI/orders/',OrderRoute);
app.use('/storeAPI/admin/',AdminRoute);


app.get("/",(req,res)=>{
    res.status(200).send("Hello from the e-commerce server side");
})


const port = 8000;

app.listen(port, ()=> console.log("ecommerce server running "));