const express =require('express')
const mongoose =require('mongoose')

const url ="mongodb://localhost/AlienDBex"

const app =express();



mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection;

con.on('open',function(){
    console.log("conected")
})
app.use(express.json());
const alienRouter = require('./routers/aliens');
app.use('/aliens',alienRouter)



app.listen(3000 ,()=> {
    console.log("server started")
})