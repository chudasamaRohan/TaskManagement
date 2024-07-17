import express from "express";
import {userRegisterCon,userAllListCon,getUserByIdCon,updateUserCon,deleteUserCon,deleteAllUserCon} from "../Controller/userController.js";
import {isUserExits} from "../Middleware/userMiddleware.js"
import { authgaurd } from "../Services/JWT/jwtServices.js";
import { validate } from "express-validation";
import {userRegisterValidation,validateObjectId,updateUserValidation} from "../Middleware/validation/userValidation.js"
const userRoutes = express.Router()

userRoutes.post("/",validate(userRegisterValidation),isUserExits,userRegisterCon)
userRoutes.get("/",authgaurd,userAllListCon)
userRoutes.get("/:id",validate(validateObjectId),authgaurd,getUserByIdCon)
userRoutes.patch("/:id",authgaurd,updateUserCon)
userRoutes.delete("/:id",validate(validateObjectId),authgaurd,deleteUserCon)
userRoutes.delete("/",authgaurd,deleteAllUserCon)



export default userRoutes;