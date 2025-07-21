import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getByRating, getMovieByGenre } from '../../api/movies';

export default function SelectComponent({name,value}) {
  const [selectedValue, setSelectedValue] = React.useState('');
  const dispatch=useDispatch()
  const GenreChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(getMovieByGenre(event.target.value))
   
    
  };
   const ratingChange = (event) => {
    setSelectedValue(event.target.value);
   dispatch(getByRating(event.target.value))
    
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={name}
          onChange={name.toLowerCase().includes('genres') ? GenreChange : ratingChange}
        >
          
          {value?.length>0 &&  value.map(item=><MenuItem value={name.toLowerCase().includes('genres') ? item.genre : item.rating}>{name.toLowerCase().includes('genres') ? item.genre : item.rating}</MenuItem>)}
         
        </Select>
      </FormControl>
    </Box>
  );
}
//<MenuItem value={name.toLowerCase().includes('Genres') ? item.genre : item.ratings}>{name.toLowerCase().includes('Genres') ? item.genre : item.ratings}</MenuItem>