import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { getMovie } from "../services/api";

const MovieDetailsPage = () => {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    

    const onGoBack = () => {
        navigate(location.state.from);
    }

    useEffect(() => {
        getMovie(params.id).then(movie => setMovie(movie))
    }, [params.id])


    return ( 
        <>
        <div>
            <button type='button' onClick={onGoBack}>Go back</button>
                {movie && (
                    <>
                        <h2>{movie.title} <span>{movie.release_date}</span></h2>
                        <p>User score: { movie.vote_average}%</p>
                        <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.title} />
                        <p><strong>Overviev</strong> <br /> {movie.overview}</p>
                        <h3><strong>Genres</strong> {movie.genres.name}</h3>
                    </>
            )}           
            </div>
            
            <>
                <ul>
                    Additional information:
                    <li>
                        <Link to={`/movies/${params}/cast`}>Cast</Link>
                    </li>
                    
                </ul>
            </>
            <Outlet />
        </>
    )
}

export default MovieDetailsPage;