console.log("payment")
import express from "express";
import { Request,Response } from "express";

const app =express();

app.listen(3003,()=>{
    console.log(`server connect on port 3003`)
    })