import User from "../Model/userModel.js"

export const isUserExits = async(req,res,next) => {
    try {

        const isExits = await User.findOne({email:req.body.email})
        if(!isExits){
            return res.status(400).send("User Does Not Exits.")
        }
        req.userData = isExits
        next()
    } catch (error) {
        return res.status(500).send(error)
    }
}


