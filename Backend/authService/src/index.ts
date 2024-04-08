    // src/index.js
    import express, { Express, Request, Response } from "express";
    import dotenv from "dotenv";
    import mongoose from "mongoose"
    import router from "../src/routes"
    dotenv.config();

    const app: Express = express();
    const port = process.env.PORT || 3000;

async function conn(){
    try{
        await mongoose.connect("mongodb://localhost/auth-service")
        console.log("connected to db")

    }
    catch(e:any){
  console.log("jthy ur")
    }

}

conn()



    app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
    });

    app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    });