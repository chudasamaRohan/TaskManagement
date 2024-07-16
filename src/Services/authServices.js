import {encryptPassword,generateToken} from "../Services/JWT/jwtServices.js"

export const userLoginSer = async(userData) => {
try {
    const isValidUser = await encryptPassword(userData.password,userData.hashedPassword)
    if(isValidUser){
        return generateToken(userData)    
    }
    else{
        return "Invalid Password"
    }
} catch (error) {
    throw error;
}
}