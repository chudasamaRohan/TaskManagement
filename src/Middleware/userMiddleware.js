import User from "../Model/userModel.js"

export const isUserExits = async(req,res,next) => {
    try {

        const isExits = await User.findOne({email:req.body.email})
        if(isExits && isExits._id){
            return res.status(400).send("User Allready Exits.")
        }
        next()
    } catch (error) {
        return res.status(500).send(error)
    }
}
