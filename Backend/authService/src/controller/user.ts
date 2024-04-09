import User from "../../model/user"
import { Request,Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const userController=async(req:Request,res:Response)=>{
    try{
     const {name,email,password}=req.body

     const findUser=await User.findOne({email})
     console.log("findUser",findUser)
     const hashPassword=await bcrypt.hash(password,10)

     if(!findUser){
        const createUser= await User.create({
            name,
            email,
            password:hashPassword
        })
        res.status(200).json({
            data:createUser
        })
       
     }
     else{
        res.status(409).json({
            data:"User Already Exits"
        })
        }
    }
    catch(e){
      console.log(e)
    }
}


export const userLogin=async(req:Request,res:Response)=>{
try{
  const  {email,password}=req.body
  const findUser=await User.findOne({email:req.body.email})
  console.log("35>>>>>>>>>>.",findUser)
  if(!findUser){
    res.status(404).json({"Status":false,data:"Email does not exits"})
  }
  else{
    console.log("42>>>>>>>>>>", typeof findUser.password)
    if (typeof findUser.password !== "string") {
        return res.status(500).json({ message: "Invalid user data" });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if(passwordMatch){

       const token= jwt.sign({userId:findUser.id,userEmail:findUser.email},"ritusecretkey")
       return res.status(200).json({"Status":true,data:token})

     }
     else{
            return res.status(401).json({ message: "Invalid credentials" });

     }

  }


}
catch(e){
console.log(e)
}

}