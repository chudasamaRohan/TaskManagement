import express from "express";
import { authgaurd } from "../Services/JWT/jwtServices.js";
import {createTaskController,getMyTaskController,getTaskListController,updateTaskController,
    deleteTaskConroller,assignTaskController,assignTaskListController} from "../Controller/taskcontroller.js";
import {isItMyTask} from "../Middleware/taskMiddleware.js"
import {createTaskValidation,assignTaskvalidate} from "../Middleware/validation/taskValidation.js"
import { validate } from "express-validation";

const taskRoutes = express.Router()

taskRoutes.post("/",validate(createTaskValidation),authgaurd,createTaskController)
taskRoutes.get("/",authgaurd,getMyTaskController)
taskRoutes.get("/taskList",authgaurd,getTaskListController)
taskRoutes.patch("/",authgaurd,isItMyTask,updateTaskController)
taskRoutes.delete("/",authgaurd,isItMyTask,deleteTaskConroller)
taskRoutes.post("/assign",validate(assignTaskvalidate),authgaurd,assignTaskController)
taskRoutes.get("/assignList",authgaurd,assignTaskListController)




export default taskRoutes;