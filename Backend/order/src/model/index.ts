import mongoose, { Schema } from "mongoose"


const OrderSchema=new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    create_At:{
        type:Date,
        default:Date.now()
    }
})


const ORDER =mongoose.model("order",OrderSchema)

export default ORDER