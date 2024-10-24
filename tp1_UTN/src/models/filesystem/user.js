import {mongoose} from "mongoose";
const Schema = mongoose.Schema
const userSchema = new Schema({

        fullname: {type: String, required: true},
        gmail: {type: String, required: true, unique: true},
        password: {type: String, required: true}    
    },
    { 
        timestamps : true
    }
)

userSchema.set("toJSON", {
    transform(_doc, ret){
        delete ret.password
    }
})

const User = mongoose.model("User", userSchema)
export default User