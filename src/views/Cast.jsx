import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "../services/api";

const Cast = () => {
   const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getCastMovie(movieId).then(data=>setCast(data))

    }, [movieId]);

    return (
        <>
            {Boolean(cast.length) && (
                <ul>
                    {cast.map(({ cast_id, name, profile_path, character }) => (
                        <li key={cast_id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                                alt={name}
                                width="185"
                                height="278"
                            />
                            <span>{name}</span>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
export default Cast;