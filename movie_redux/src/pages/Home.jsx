import { useEffect } from "react";
import { getMovies } from "../api/movies";
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getSearchByValue } from "../utils/getSearchByValue";
const Home = () => {
    const dispatch = useDispatch();
    const { movies,searchValue } = useSelector(state => state.movies);

    //const filterMovies=getSearchByValue(movies,searchValue)
    console.log({movies})
    

    useEffect(() => {
        dispatch(getMovies())
    }, [])
    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1,mt:10,px:2 }}>
                <Grid container spacing={2}>

                    {
                        movies?.length > 0 && movies.map((movie) => (
                            <MovieCard movie={movie} key={movie._id} />
                        ))

                    }

                </Grid>
            </Box>


        </>
    )
}
export default Home;