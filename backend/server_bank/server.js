const express= require('express');
const app= express();
const db=require('./db');
const cors = require('cors');
const mongoose =require('mongoose');

const UIDRoute = require('./routes/userIDRoute');

app.use(express.json());
app.use(cors());
app.use('/bankAPI/users',UIDRoute);

app.get("/",(req,res)=>{
    res.send("Hello from the Bank server side");
})

app.listen(4000, ()=> console.log('BANK SERVER hello dear'));


const port= 9000;

//app.listen(port, ()=> 'BANK SERVER');