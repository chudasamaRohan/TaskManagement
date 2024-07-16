import bcrypt from  "bcrypt";
import jwt from 'jsonwebtoken';
import User from "../../Model/userModel.js";
import dotenv from "dotenv";

dotenv.config()

export const bcryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw error;
  }
};



export const encryptPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

export const generateToken = (userData) => {
  try {
    const payload = { _id: userData._id,role:userData.role,email:userData.email };
    const secret = process.env.SECRET_KEY; 
    const options = { expiresIn: '1d' }; 
    const token = jwt.sign(payload, secret, options);
    return token;
    
  } catch (error) {
    throw error;
  }
};

export const authgaurd = (req, res, next) => {
  try {
    
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(401).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req._id = decoded._id
        req.email = decoded.email
        req.role = decoded.role

        const isExits =  User.findById(req._id)
        if(!isExits){
            return res.status(400).send("Plz first Register.")
        }
        next();
    });
  } catch (error) {
    return res.status(500).send(error)
  }
}


