import User from "../models/user.model.js";

export const signUp = async (req, res) => {
    console.log(req.body)
    // const {username, email, password } = req.body;  
    // console.log({username, email, password});

    // if(!username || !email || !password || username === "" || email === "" || password === "") {
    //    res.status(400).json({message: "All fields are required"}); 
    // }

    // const newUser = new User({username, email, password})
    // await newUser.save();
    // res.json("Sign up successfully") 
} 