import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signUp = async (req, res) => {
    console.log(req.body)
    const {username, email, password } = req.body;  

    if(!username || !email || !password || username === "" || email === "" || password === "") {
       res.status(400).json({message: "All fields are required"}); 
    }

    const hashedPassword = await bcryptjs.hashSync(password, 10)

    try {
        const newUser = new User({username, email, password: hashedPassword})
        await newUser.save();
        res.json('Sign up successfully') 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  
} 