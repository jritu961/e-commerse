
import { Request,Response } from "express";
import Product from "../model/product"
import {channel} from "../index"
import {CustomRequest} from "../../../isAuthenticated"
 export const registerProduct=async(req:Request,res:Response)=>{
    try{
        const {name,description} =req.body;
        const newProduct=await Product.create({
           name,
           description
        })
        res.send(newProduct)
    }
    catch(e){
        res.send("failure")

    }
     

 }

 export const buyProduct=async(req:CustomRequest,res:Response)=>{
    let order:any;
    const {ids} =req.body;
    const products=await Product.findOne({_id:{$in:ids}})

  

        channel.sendToQueue(
            "ORDER",
            Buffer.from(
                JSON.stringify({
                    products,
                    userEmail: req.user.email,
                })
            )
        );
        channel.consume("PRODUCT", (data:any) => {
             order = JSON.parse(data.content);
        });
        return res.json(order);
    
    }

 