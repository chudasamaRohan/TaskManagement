import express from "express"
import { isUserExits } from "../Middleware/authMiddleware.js";
import {userLoginCon} from "../Controller/authController.js";
import { validate } from "express-validation";
import { loginUserValidation } from "../Middleware/validation/authValidation.js";
const authRoutes = express.Router()


authRoutes.post("/login",validate(loginUserValidation),isUserExits,userLoginCon)


export default authRoutes;