import mongoose, { Schema } from "mongoose"


const UserSchema=new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    create_At:{
        type:Date,
        default:Date.now()
    }
})


const User =mongoose.model("user",UserSchema)

export default User