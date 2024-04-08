/* eslint-disable no-unused-vars */
import { logger } from "../../shared/logger";
import Order from "../../Schema/order";
import {  Response } from "express";
import { CustomRequest } from "../../middleware/verifyToken";
import Shop from "../../Schema/shop";
import ProductModel from "../../Schema/produts";
const controller={
orderProduct:async(req:CustomRequest,res:Response)=>{
try{
const user=req.decodedToken?.userId
const shop=await Shop.findOne({user:user})
if(shop){

const maxOrder = await Order.find({ shop: shop?._id });


// Calculate the new order number
 const newOrderNumber = maxOrder.length > 0 ? maxOrder.length + 1 : 1;
  // eslint-disable-next-line max-len
  const {customerName,customerEmail,orderDate,items,totalAmount,shippingAddress,paymentDetails,status}=req.body
    // eslint-disable-next-line max-len
    const product=await ProductModel.find({productCode:items[0].productCode,shop:shop._id})
    if(product && product.length>0){
      // eslint-disable-next-line max-len
      const createOrder=await Order.create({orderNumber:newOrderNumber,customerName,customerEmail,orderDate,items,totalAmount,shippingAddress,paymentDetails,status,shop:shop?._id})
      res.status(201).json({success:true,data:createOrder})
    }
    else{
      res.status(404).json({success:false,error:"Product not found"})
    }
    // eslint-disable-next-line max-len 
}
else{
  res.status(404).json({success:false,error:"Shop not found"})
} 
}
catch(e:any){
  logger.error(e.message)

  res.status(500).json({success:false,error:e.message})
}

},
getOrderDetailbyOrderNumber:async(req:CustomRequest,res:Response)=>{
try{
  const user=req.decodedToken?.userId
const shop=await Shop.findOne({user:user})
if(shop){
  const orderDetail=await Order.find({orderNumber:req.params.orderNumber,shop:shop._id})
  if(orderDetail && orderDetail.length>0){
  res.status(200).json({success:true,data:orderDetail})
  }
  else{
    res.status(404).json({success:false,error:"Order not found for this Product"})
  }
}
else{
  res.status(404).json({success:false,error:"Shop not found"})
}
}

catch(e:any){
  logger.error(e.message)

  res.status(500).json({success:false,error:e.message})
}
},
getAllOrders:async(req:CustomRequest,res:Response)=>{
try{
  const user=req.decodedToken?.userId
const shop=await Shop.findOne({user:user})
if(shop){
const orderDetail=await Order.find({shop:shop._id})
res.status(200).json({success:true,data:orderDetail})
}
else{
  res.status(404).json({success:false,data:"No data found"})
}
}
catch(e:any){
  logger.error(e.message)
  res.status(500).json({success:false,error:e.message})
}
}
}
export default controller