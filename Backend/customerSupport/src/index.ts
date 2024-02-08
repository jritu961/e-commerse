console.log("CustomerSuPPort")
import express from "express";
import { Request,Response } from "express";

const app =express();

app.listen(3001,()=>{
    console.log(`server connect on port 3001`)
    })