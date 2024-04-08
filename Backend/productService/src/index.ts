    // src/index.js
    import express, { Express, Request, Response } from "express";
    import dotenv from "dotenv";
    import mongoose from "mongoose"
    impo
    dotenv.config();

    const app: Express = express();
    const port = process.env.PORT || 3006;

async function conn(){
    try{
        await mongoose.connect("mongodb://localhost/product-service")
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