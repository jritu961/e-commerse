import mongoose, { Schema } from "mongoose"


const ProductSchema=new Schema({
    name:{type:String},
    description:{type:String},
    // password:{type:String},
    create_At:{
        type:Date,
        default:Date.now()
    }
})


const Product =mongoose.model("product",ProductSchema)

export default Product