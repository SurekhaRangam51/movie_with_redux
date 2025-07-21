import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({ movie }) {
    const { id, movieName, year, genre, writtenBy, directorName, heroName, heroineName, duration, budget, rating, poster
    } = movie
    return (
        <Grid size={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={poster}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Directed by -{directorName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Written by -{writtenBy}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        genre: <Chip label={genre} />
                    </Typography>

                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Duration -{duration}
                    </Typography>
                    <Typography variant="body2" sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5 // small space between star and number
                    }}>

                        <StarIcon />

                        {rating}
                    </Typography>


                </CardActions>



            </Card>
        </Grid>
    );
}
