import {userLoginSer} from "../Services/authServices.js"


export const userLoginCon = async (req,res) => {
    try {
        const hashedPassword = req.userData.password
        const _id = req.userData._id
        const email = req.userData.email
        const role = req.userData.role
        const userData = {...req.body,hashedPassword,role,_id,email}
    const token = await  userLoginSer(userData)     
        if(token.length > 20){
            return res.status(200).send(token)
        }
        return res.status(400).send(token)
    } catch (error) {
        return res.status(500).send(error)
    }
}