import {createTaskService,getMyTasksService,getTaskListService,updateTaskServices,deleteTaskService, assignTaskService,assignTaskListService} from "../Services/taskServices.js"
import mongoose from "mongoose"

export const createTaskController = async(req,res) => {
   try {
       const createdBy = req._id
       const taskData = req.body
       const payload = {...taskData,createdBy}
       const task = await createTaskService(payload)
        if(task && task._id){
            return res.status(200).send("Task Created Succesfully.")
        }
        return res.status(400).send(task.errors)
   } catch (error) {
    throw error
   }
}


export const getMyTaskController = async(req,res) => {
    try {
        const userId = req._id
        const tasks = await getMyTasksService(userId)
        if(tasks.length){
            return res.status(200).send(tasks)
        }
        return res.status(400).send(tasks)
    } catch (error) {
        throw error
    }
}

export const getTaskListController = async(req,res) => {
    try {
        const taskList = await getTaskListService()
        if(taskList.length){
            return res.status(200).send(taskList)
        }
        return res.status(404).send("Task Does not exits.")
    } catch (error) {
            throw error       
    }
}

export const updateTaskController = async(req,res) => {
    try {
        const taskId = req.body.taskId
        const updateTask = await updateTaskServices(taskId,req.body)
        if(updateTask && updateTask._id){
            return res.status(200).send("updated Succesfully")
        }
        return res.status(404).send(updateTask)
    } catch (error) {
        throw error
    }
}

export const deleteTaskConroller = async(req,res) => {
        try {
            const taskId = req.params.id
            const deleteUser = await deleteTaskService(taskId)
            if(deleteUser && deleteUser._id){
                return res.status(200).send("Delete Succefully.")
            }
            return res.status(404).send(deleteUser)
        } catch (error) {
            throw error       
        }
}

export const assignTaskController = async(req,res) => {
    try {
        const taskId = new mongoose.Types.ObjectId(req.body.taskId); 
        const assigenId = new mongoose.Types.ObjectId(req.body.assigenId);


          const assignTask = await assignTaskService({taskId,assigenId})
            if(assignTask && assignTask._id){
                return res.status(200).send("Task Assign Succesfully.")
            }
            return res.status(404).send(assignTask)
    } catch (error) {
        throw error
    }
}

export const assignTaskListController = async(req,res) => {
    try {
        const taskList = await assignTaskListService()
        if(taskList.length){
            return res.status(200).send(taskList)
        }
        return res.status(404).send("AssignTask Does not exits.")
    } catch (error) {
            throw error       
    }
}