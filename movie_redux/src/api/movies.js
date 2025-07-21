import axios from "axios"
import { setMovies,setGenre,setRating } from "../slice/MovieSlice"
 const baseUrl="http://localhost:9987/api/movies"
export const getMovies=()=>async dispatch =>{
   const url=baseUrl + '/getallmovies'
    try{
        const {data}=await axios.get(url)
        dispatch(setMovies(data.moviedata));
        
        //return data.moviedata;
        
    }
    catch(err){
        return err;
    }
}
 export const getMoviesBySearch=(value)=>async dispatch=>{
    
    const url=baseUrl +'/getsearch';
    try{
        const {data}=await axios.get(url,{
            params:{
                getsearch:value
            }
        })
        dispatch(setMovies(data.moviedata))
    }
    catch(err){
        return err;
    }
 }

 export const getAllGenre=()=>async dispatch=>{
    const url=baseUrl +'/getgenre'
    try{
        const {data}=await axios.get(url)
        dispatch(setGenre(data.genredata))
    }
    catch(err){
        return err;
    }
 }

 export const getAllRating=()=>async dispatch=>{
    const url=baseUrl +'/getrating'
    try{
        const {data}=await axios.get(url)
        dispatch(setRating(data.ratingdata))
    }
    catch(err){
        return err;
    }
 }
 
 export const getMovieByGenre=(value)=>async dispatch=>{
    const url=baseUrl +'/getbygenre'
    try{
        const {data}=await axios.get(url,{
            params:{
                genre:value
            }
        })
        dispatch(setMovies(data.moviedata))
    }
    catch(err){
        return err
    }
 }
 export const getByRating=(value)=>async dispatch=>{
    const url=baseUrl + '/getbyrating'
    try{
        const {data}=await axios.get(url,{
            params:{
                rating:value
            }
        })
        dispatch(setMovies(data.moviedata))
    }
    catch(err){
        return err;
    }
 }
