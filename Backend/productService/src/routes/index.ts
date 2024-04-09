import express from "express"

import {registerProduct} from "../controller/index"
import {buyProduct} from "../controller/index"
import {isAuthenticatedUser} from "../../../isAuthenticated"
const router=express.Router()


router.post("/createProduct",isAuthenticatedUser,registerProduct)
router.get("/createProduct",isAuthenticatedUser,buyProduct)

export default router