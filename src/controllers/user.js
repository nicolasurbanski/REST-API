import User from "../models/filesystem/user.js";
import {hash, compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
const saltRounds = 10

export const userController = {
    async registerUser(req, res){
        try{
            const {fullname, gmail} = req.body
            const password = await hash(req.body.password, saltRounds)
            const newUser =  new User({fullname, gmail, password})
            const response = await newUser.save()
            res.status(200).json({ success: true, message: "User created",data: response})
        } catch(error){
            res.status(500).json({ success: false, message: "Internal Server Error"})
        }
    },

    async login(req, res){
        const response = await User.find().where({gmail: req.body.gmail})
        if (!response.length){
            return res.status(401).json({success: false, message: "Invalid Gmail or password"})
        }
        const samePassword = await compare(req.body.password, response[0].password)
        if(!samePassword){
            return res.status(401).json({success: false, message: "Invalid Gmail or password"})
        }
        const userForToken = {
            userName: response[0].fullname,
            userGmail: response[0].gmail,
            sub: response[0].id
        }

        const token =  jwt.sign(userForToken, process.env.SECRET, {expiresIn: '3h'})
        res.status(200).json({success: true, message: "User Authenticated", data: token})
    },

}