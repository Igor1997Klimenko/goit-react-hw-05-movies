import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastReviews } from "../services/api";
import {NotReviews} from '../styles.component'

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getCastReviews(id).then(rev=>setReviews(rev))
    },[id])

    return (
        <>
            {Boolean(reviews.length) ? (
                <ul>
                    {reviews.map(({id,author,content }) => (
                        <li key={id}>
                            <strong>Author:{author}</strong>
                            <p>{content}</p>
                        </li>
                    ))}    
                </ul>
            ):(
                <NotReviews>We don`t have any reviews for this movie</NotReviews>
            )}
        </>
    )
}

export default Reviews;