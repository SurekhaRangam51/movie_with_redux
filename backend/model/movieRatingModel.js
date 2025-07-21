import mongoose from 'mongoose'
const movieRatingSchema=new mongoose.Schema({
    rating:{
      type:Number
    }
})

const movieRatingModel=mongoose.model("rating",movieRatingSchema)
export {movieRatingModel}