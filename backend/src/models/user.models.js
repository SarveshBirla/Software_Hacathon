import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type : String,
        require:true,
        unique:true,
    },
    phone:{
        type: Number,
        unique:true,
        require:true,
    },


},{timestamps:true})

export const User = mongoose.model('User', userSchema);