import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import SelectComponent from './NavComponents/SelectComponent';
import { useDispatch,useSelector } from 'react-redux';
import { setSearchValue } from '../slice/MovieSlice';
import { getMoviesBySearch ,getAllGenre,getByRating, getAllRating} from '../api/movies';
import { useEffect } from 'react';
import { debounce } from 'lodash';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function Navbar() {
 const dispatch=useDispatch()
 //const {searchValue}=useSelector(state=>state.movies )

// search without api
//  const setSearch=(e)=>{
//   dispatch(setSearchValue(e.target.value))
// }
//console.log(searchValue)

//search with api
const setSearch=debounce((e)=>{
  dispatch(getMoviesBySearch(e.target.value))
},500)



useEffect(()=>{
  dispatch(getAllGenre())
  dispatch(getAllRating())
},[])


 
const {genre,rating}= useSelector(state=>state.movies)

console.log("rating",rating)



  

   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Movies App
          </Typography>
          <Search onChange={setSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{flexGrow:1}} />
          <Box sx={{ display:{xs:"none",md:"flex"}}} />
          <SelectComponent name="Genres" value={genre}/>
          <SelectComponent name="Rating" value={rating}/>
        </Toolbar>
        
      </AppBar>
      
    </Box>
  );
}
