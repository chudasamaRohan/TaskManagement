import express from "express";
import {userRegisterCon,userAllListCon,getUserByIdCon,updateUserCon,deleteUserCon,deleteAllUserCon} from "../Controller/userController.js";
import {isUserExits} from "../Middleware/userMiddleware.js"
import { authgaurd } from "../Services/JWT/jwtServices.js";
const userRoutes = express.Router()

userRoutes.post("/",isUserExits,userRegisterCon)
userRoutes.get("/",authgaurd,userAllListCon)
userRoutes.get("/:id",authgaurd,getUserByIdCon)
userRoutes.patch("/:id",authgaurd,updateUserCon)
userRoutes.delete("/:id",authgaurd,deleteUserCon)
userRoutes.delete("/",authgaurd,deleteAllUserCon)



export default userRoutes;