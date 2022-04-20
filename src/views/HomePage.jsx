import { useState, useEffect } from 'react';
import { apiFetchMovies } from '../services/api';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    apiFetchMovies().then(data => setMovies(data));
},[])
    return (
        <>
            <h1>Trending today</h1>
            <MoviesList movies={movies}/>
        </>
        
        
    )
}

export default HomePage;