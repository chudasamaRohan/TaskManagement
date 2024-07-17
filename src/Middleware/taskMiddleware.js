import Task from "../Model/taskModel.js";
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;
export const isItMyTask = async(req,res,next) => {
    const userObjectId = new ObjectId(req._id);
    const isMyTask = await Task.find({_id:req.body.taskId,createdBy:userObjectId})
    if(isMyTask.length){
        next()
    }
    return res.status(401).send("Task not found or you are not authorized to this task")
}