    // src/index.js
    import express, { Express, Request, Response } from "express";
    import dotenv from "dotenv";
    import mongoose from "mongoose"
    import * as amqp from 'amqplib';
    import router from "../src/routes"
    dotenv.config();

    const app: Express = express();
    app.use(express.json({}))
    app.use("/product",router)
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

export let channel: amqp.Channel; // Specify the type of 'channel' variable
let connection: amqp.Connection;
 async function connect(){
  const amqpServer ="amqp://localhost:5672"
  connection=await amqp.connect(amqpServer)
  channel=await connection.createChannel();
  await channel.assertQueue("Product")
 }

connect()
    app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
    });

    app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    });