import Task from "../Model/taskModel.js";
import TaskAssign from "../Model/taskAssign.js"

export const createTaskService = async (taskData) => {
    try {
        const createdTask = await Task.create(taskData);
        return createdTask;
    } catch (error) {
        return error
    }
};

export const getMyTasksService = async(userId) => {
    try {
        const tasks = await Task.find({createdBy:userId})
        return tasks
    } catch (error) {
    throw error        
    }
}

export const getTaskListService =  async() => {
    try {
        const taskList = await Task.find({})
        return taskList
    } catch (error) {
        throw error
    }
}

export const updateTaskServices = async(taskId,taskData) => {
    try {
        const task = await Task.findByIdAndUpdate(taskId,taskData)
        return task
    } catch (error) {
        throw error
    }

}

export const deleteTaskService = async(taskId) => {
    try {
        const task = await Task.findByIdAndDelete(taskId)
        return task
    } catch (error) {
        throw error        
    }
}

export const assignTaskService = async(data) => {
    try {
        const assignTaskData = await TaskAssign.create(data)
        return assignTaskData
    } catch (error) {
        throw error
    }
}

export const assignTaskListService = async() => {
    try {
        const assignTaskList = await TaskAssign.find({})
        .populate('assigenId')
        .populate('taskId')
        .exec();      
        return assignTaskList 
    } catch (error) {
        throw error
    }
}