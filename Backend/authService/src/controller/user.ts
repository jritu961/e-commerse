import User from "../../model/user"


export const userController=async(req,res)=>{
    try{
     const {name,email,password}=req.body

     const findUser=await User.find(email)
     if(findUser){
        res.send(409).json({
            data:"User Already Exits"
        })
     }
     else{
        const createUser= await User.create({
            name,
            email,
            password,


        })
        res.send(200).json({
            data:createUser
        })     }
    }
    catch(e){
      console.log(e)
    }
}