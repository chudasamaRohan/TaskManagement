import express from "express"
import { isUserExits } from "../Middleware/authMiddleware.js"
import {userLoginCon} from "../Controller/authController.js"

const authRoutes = express.Router()


authRoutes.post("/login",isUserExits,userLoginCon)


export default authRoutes;