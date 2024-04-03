import mongoose from "mongoose"

const phoneSchema = new mongoose.Schema({
    phone:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    score:{
        type: Number,
        require: true,
        default: 0,
    },
    fraud:{
        type : String,
        require: true,
        default : "NIL",
    }

},{timestamps:true})

export const Phone = mongoose.model('Phone', phoneSchema);