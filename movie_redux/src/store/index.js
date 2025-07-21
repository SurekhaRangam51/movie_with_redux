import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "../slice/MovieSlice"
export const store=configureStore({
    reducer:{
        movies:movieReducer
    }
})