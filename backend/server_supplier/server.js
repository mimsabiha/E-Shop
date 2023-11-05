const express= require('express');
const app= express();
const db=require('./db.js');
const cors = require("cors");

const OrderRoute = require('./routes/orderRoute.js');

app.use(express.json());
app.use(cors());
app.use('/supplyAPI/orders',OrderRoute);

app.get("/",(req,res)=>{
    res.status(200).send("Hello from the supplier server");
})

const port= 7000;

app.listen(port, ()=> console.log('Supply SERVER'));