import mongoose from "mongoose";
import Task from "./taskModel.js";
import User from "./userModel.js";

const taskAssignSchema = new mongoose.Schema({
    assigenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
})

const TaskAssign = mongoose.model('TaskAssign', taskAssignSchema);

export default TaskAssign;