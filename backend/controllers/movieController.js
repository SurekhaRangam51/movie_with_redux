import { movieGenreModel } from "../model/movieGenreModel.js";
import { movieModel } from "../model/movieModel.js";
import { movieRatingModel } from "../model/movieRatingModel.js";


const getAllMovies=async(req,res)=>{
    try{
        let movieData=await movieModel.find()
        res.json({err:0,moviedata:movieData})

    }
    catch(err){
          res.json({err:1,msg:"error occured in retrieving all movies"})
    }
}
const addMovie=async(req,res)=>{
     
        const movieinfo=new movieModel(req.body)
    try{
       
        const save= await movieinfo.save()
         res.json({err:0,msg:"successfully added the movie data"})
    }
    catch(err){
         res.json({err:1,msg:"error in adding a movie data"})
    }
}

const getSearch = async (req, res) => {
  try {
    const query = req.query.getsearch;  // query key must match frontend

    // Fetch all movies from DB
    const movieData = await movieModel.find();

    // Filter based on search (case-insensitive, partial match)
    const movie = movieData.filter(({ movieName, directorName, genre }) =>
      movieName.toLowerCase().includes(query.toLowerCase()) ||
      directorName.toLowerCase().includes(query.toLowerCase()) ||
      genre.toLowerCase().includes(query.toLowerCase())
    );

    // Send result in a format Redux expects
    res.json({ moviedata: movie });
  } catch (err) {
    res.json({ err: 1, msg: "Error searching movies" });
  }
}

const getByGenre=async(req,res)=>{
   
    try{
         const query=req.query.genre
        const movieData=await movieModel.find()

        const movie=movieData.filter(({genre})=>genre.toLowerCase().includes(query.toLowerCase()))
        res.json({moviedata:movie})
    }
    catch(err){
        res.json({err:1,msg:"Error in retrieving movies by genre"})
    }
}
const getByRating=async(req,res)=>{
    try{
        const query=req.query.rating
         const movieData=await movieModel.find()
        const movie=movieData.filter(({rating})=>rating>=(query))
        res.json({moviedata:movie})
    }
    catch(err){
        res.json({err:1,msg:"Error in retrieving movies by rating"})
    }
}
const addGenre=async(req,res)=>{
    const genreInfo=new movieGenreModel(req.body)
    try{
        const save=await genreInfo.save()
        res.json({err:0,msg:"successfully added the genre"})
    }
    catch(err){
        res.json({err:1,msg:"error in adding a genre"})
    }
}


const getGenre=async(req,res)=>{
    try{
        const genreData=await movieGenreModel.find()
        res.json({genredata:genreData})
    }
    catch(err){
        res.json({err:1,msg:"error in getting the genre"})
    }
}

const addRating=async(req,res)=>{
    const ratingInfo=new movieRatingModel(req.body)
    try{
        const save=await ratingInfo.save()
        res.json({err:0,msg:"successfully added the rating"})
    }
    catch(err){
        res.json({err:1,msg:"error in adding a rating"})
    }
}
const getRating=async(req,res)=>{
    try{
        const ratingData=await movieRatingModel.find()
        res.json({ratingdata:ratingData})
    }
    catch(err){
        res.json({err:1,msg:"error in getting the ratings"})
    }
}
export {getAllMovies,addMovie,getSearch,addGenre,getGenre,getByGenre,getByRating,addRating,getRating}

