import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/' , (req , res)=>{
    console.log('hola');
    res.end();  
})


app.listen(PORT ,()=>{
    console.log('server on start');
} )