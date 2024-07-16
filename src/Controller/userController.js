import {userRegisterSer,userAllListSer,getUserByIdSer,updateUserSer,deleteUserSer,deleteAllUserSer} from "../Services/userServices.js"


export const userRegisterCon = async(req,res) => {
   try {
       const userData = req.body
       const user = await userRegisterSer(userData)
        if(user && user._id){
            return res.status(200).send("Registation Succesfully.")
        }
        return res.status(400).send(user.errors)   
   } catch (error) {
        return res.status(500).send(error)
   }
}


export const userAllListCon = async(req,res) => {
    try {
        const userData = await userAllListSer()
        if(userData.length){
          return res.status(200).send(userData)
        }
        res.status(404).send("'User does not exist in the list'")
    } catch (error) {
        throw error
    }
}

export const getUserByIdCon = async(req,res) => {
    try {
        const useId = req.params.id
        const user = await getUserByIdSer(useId)
        if(user && user._id){
           return res.status(200).send(user)
        }
       return res.status(404).send("User Does Not Exits.")
    } catch (error) {
        throw error
    }
}

export const updateUserCon = async(req,res) => {
    try {
        const userId = req.params.id
        const userData = req.body
        const user = await updateUserSer(userId,userData)
        if(user && user._id){
            return res.status(200).send("Updated Succesfully.")
        }
        return res.status(404).send(user)
    } catch (error) {
        throw error
    }
}

export const deleteUserCon = async(req,res) => {
    try {
        const userId = req.params.id
        const deleteUser = await deleteUserSer(userId)
        if(deleteUser && deleteUser._id){
            return res.status(200).send("Deletes Succefully.")
        }
        return res.status(404).send(deleteUser)
    } catch (error) {
        throw error       
    }
}

export const deleteAllUserCon = async(req,res) => {
    try {
        const deleteUser = await deleteAllUserSer()
        if(deleteUser.acknowledged){
            return res.status(200).send("Delete AllUser SuccesFully.")
        }
        return res.status(404).send(deleteUser)
    } catch (error) {
        throw error
    }
}