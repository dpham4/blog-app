import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("mongoDB is successfully connected")
}).catch((error)=>{
    console.log(error)
});

const app = express();
app.use(express.json());

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({ success: false, statusCode, message}) 
})