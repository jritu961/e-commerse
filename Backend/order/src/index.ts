    // src/index.js
    import express, { Express, Request, Response } from "express";
    import dotenv from "dotenv";
    import mongoose from "mongoose"
    import * as amqp from 'amqplib';
   import ORDER from "./model/index"

    dotenv.config();

    const app: Express = express();
    const port = process.env.PORT || 3004;

async function conn(){
    try{
        await mongoose.connect("mongodb://localhost/order-service")
        console.log("connected to db order")

    }
    catch(e:any){
  console.log("jthy ur")
    }

}
function createOrder(products:any, userEmail:any) {
    let total = 0;
    for (let t = 0; t < products.length; ++t) {
        total += products[t].price;
    }
    const newOrder = new ORDER({
        products,
        user: userEmail,
        total_price: total,
    });
    newOrder.save();
    return newOrder;
}
conn()

let channel: amqp.Channel; // Specify the type of 'channel' variable
let connection: amqp.Connection;
 async function connect(){
  const amqpServer ="amqp://localhost:5672"
  connection=await amqp.connect(amqpServer)
  channel=await connection.createChannel();
  await channel.assertQueue("ORDER")
 }
 connect().then(() => {
    channel.consume("ORDER", (data:any) => {
        console.log("Consuming ORDER service");
        const { products, userEmail } = JSON.parse(data.content);
        const newOrder = createOrder(products, userEmail);
        channel.ack(data);
        channel.sendToQueue(
            "PRODUCT",
            Buffer.from(JSON.stringify({ newOrder }))
        );
    });
});


    app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
    });

    app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    });