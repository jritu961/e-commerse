console.log('Hello world!')
import express from "express";

const app =express();

app.listen(3002,()=>{
    console.log(`server connect on port 3002`)
    })