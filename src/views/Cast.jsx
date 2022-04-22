import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "../services/api";
import {ItemCast, ListCast} from '../styles.component'

const Cast = () => {
   const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getCastMovie(id).then((data) => setCast(data));
    }, [id]);

    return (
        <>
            {Boolean(cast.length) && (
                <ListCast>
                    {cast.map(({ cast_id, name, profile_path, character }) => (
                        <ItemCast key={cast_id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                                alt={name}
                                width="185"
                                height="278"
                            />
                            <span>{name}</span>
                            <p>Character: {character}</p>
                        </ItemCast>
                    ))}
                </ListCast>
            )}
        </>
    );
}
export default Cast;