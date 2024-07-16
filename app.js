import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config()
import userRoutes from "./src/Routes/userRoutes.js";
import authRoutes from "./src/Routes/authRoutes.js";
import taskRoutes from "./src/Routes/taskRoutes.js";
import connectDB from "./src/DB/dbConnection.js";



const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

connectDB();

app.use("/users",userRoutes)
app.use("/auth",authRoutes)
app.use("/tasks",taskRoutes)

app.listen(process.env.PORT,() => {
    console.log(`Server Connected on Port ${process.env.PORT}`);
})