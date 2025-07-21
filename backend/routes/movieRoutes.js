import express from 'express'
import { addGenre, addMovie, addRating, getAllMovies, getByGenre, getByRating, getGenre, getRating, getSearch } from '../controllers/movieController.js'

const router=express.Router()
router.get("/getallmovies",getAllMovies)
router.post("/addmovie",addMovie)
router.get("/getsearch",getSearch)
router.post("/addgenre",addGenre)
router.get("/getgenre",getGenre)
router.get("/getbygenre",getByGenre)
router.get("/getbyrating",getByRating)
router.post("/addrating",addRating)
router.get("/getrating",getRating)

export default router