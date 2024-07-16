import Task from "../Model/taskModel.js";

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