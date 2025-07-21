import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,  // One genre per movie (e.g., "Sci-Fi")
        required: true
    },
    writtenBy: {
        type: String
    },
    directorName: {
        type: String
    },
    heroName: {
        type: String
    },
    heroineName: {
        type: String
    },
    duration: {
        type: String  // Stored as "148 min" (string, not number)
    },
    budget: {
        type: Number  // Stored in USD (e.g., 160000000)
    },
    rating: {
        type: Number  // Numeric rating (e.g., 8.8)
    },
    poster: {
        type: String  // URL for the poster
    }
}, { timestamps: true });

const movieModel = mongoose.model('Movie', movieSchema);
export { movieModel };
