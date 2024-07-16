 import User from "../Model/userModel.js";
 import {bcryptPassword} from "../Services/JWT/jwtServices.js"
 
 export const userRegisterSer = async(userData) => {
    try {
        const hashedPassword = await bcryptPassword(userData.password)
        userData.password = hashedPassword
        return await User.create(userData); 
    } catch (error) {
        throw error;
    }
}

export const userAllListSer = async() => {
    try {
        const userList = await User.find({})
        return userList
    } catch (error) {
        throw error
    }
}

export const getUserByIdSer = async(userId) => {
    try {
        const user = await User.findById(userId)
        return user
    } catch (error) {
        throw error        
    }
}


export const updateUserSer = async(userId,userData) => {
    try {
        if(userData && userData.password){
            userData.password = await bcryptPassword(userData.password)
        }
        const user = await User.findByIdAndUpdate(userId,userData)
        return user
    } catch (error) {
        throw error        
    }
}

export const deleteUserSer = async(userId) => {
    try {
        const user = await User.findByIdAndDelete(userId)
        return user
    } catch (error) {
        throw error        
    }
}

export const deleteAllUserSer = async () => {
    try {
        const deleteUser = await User.deleteMany({});
        return deleteUser 
    } catch (error) {
        throw error;
    }
};