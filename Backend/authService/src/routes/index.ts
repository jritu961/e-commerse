import express from "express"
import {userController} from "../controller/user"
import {userLogin} from "../controller/user"
import { isAuthenticatedUser } from "../../../isAuthenticated"
const router=express.Router()


router.post("/register",userController)
router.post("/login",userLogin)

export default router