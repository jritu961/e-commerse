import jwt from "jsonwebtoken"
import {Request,Response} from "express"
// src/index.js


// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3008;



// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
export interface CustomRequest extends Request {
    user?: any;
}
export const isAuthenticatedUser=(req:CustomRequest,res:Response,next:any)=>{
    console.log("hello")
    const token =req.header('Authorization')

    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' });

    }
    try{
        const decoded = jwt.verify(token, "ritusecretkey");
       
        // Attach the decoded payload to the request object for further use in route handlers
        req.user = decoded;
 
        // Proceed to the next middleware or route handler
        next();
    }
    catch(e){
        
    }
 
}
