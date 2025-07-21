import mongoose from "mongoose";
const movieGenreSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})

const movieGenreModel=mongoose.model("genre",movieGenreSchema)
export {movieGenreModel};