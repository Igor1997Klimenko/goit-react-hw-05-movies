import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { getMovie } from "../services/api";
import { BackButton } from '../styles.component';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { CardMovie, InfoMovie, Additional, StrongerList, LinkIdCast, VariableSton } from '../styles.component'
import { Suspense } from "react";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    

    const onGoBack = () => {
        navigate(location?.state?.from ?? '/');
    }

    useEffect(() => {
        getMovie(id).then(movie => setMovie(movie))
    }, [id])

    return ( 
        <>
        <div>
            <BackButton type='button' onClick={onGoBack}><AiOutlineDoubleLeft/> Go back</BackButton>
                {movie && (
                    <CardMovie>
                        <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.title} />
                            <InfoMovie>
                            <h2>{movie.title} <span>({movie.release_date})</span></h2>
                            <p>User score: { movie.vote_average}%</p>
                            <p><strong>Overviev</strong> <br />{movie.overview}</p>
                            <p><strong>Genres:</strong><br/>  {movie.genres.map(genre => genre.name).join(' / ')}</p>
                            </InfoMovie>
                    </CardMovie>
                )}           
            </div>
            
        <>
            <Additional>Additional information:</Additional>
                <StrongerList>
                    <LinkIdCast>
                        <Link to={`/movies/${id}/cast`}><VariableSton>Cast</VariableSton></Link>
                    </LinkIdCast>

                    <LinkIdCast>
                        <Link to={`/movies/${id}/reviews`}><VariableSton>Reviews</VariableSton></Link>
                    </LinkIdCast> 
                </StrongerList>
            </>
            <Suspense fallback={<div>Загружаем...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default MovieDetailsPage;