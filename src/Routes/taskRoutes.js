import express from "express";
import { authgaurd } from "../Services/JWT/jwtServices.js";
import {createTaskController,getMyTaskController,getTaskListController,updateTaskController} from "../Controller/taskcontroller.js";
import {isItMyTask} from "../Middleware/taskMiddleware.js"

const taskRoutes = express.Router()

taskRoutes.post("/",authgaurd,createTaskController)
taskRoutes.get("/",authgaurd,getMyTaskController)
taskRoutes.get("/taskList",authgaurd,getTaskListController)
taskRoutes.patch("/",authgaurd,isItMyTask,updateTaskController)





export default taskRoutes;