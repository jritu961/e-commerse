import mongoose, { Schema } from "mongoose"


const OrderSchema=new Schema({
   products:[
    {
        product_id:String
    }
   ],
   user:String,
    create_At:{
        type:Date,
        default:Date.now()
    }
})


const User =mongoose.model("user",OrderSchema)

export default User