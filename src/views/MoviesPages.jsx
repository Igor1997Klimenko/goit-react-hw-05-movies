import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm'
import { getQueryMovie } from '../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const param = searchParams.get('query');

    useEffect(() => {
        if (param) {
            getQueryMovie(param).then(res => setMovies(res));
            setQuery(param);
    }
    }, [param])

    const onSubmitForm = e => {
        e.preventDefault();
        setSearchParams({ query });
        getQueryMovie(query).then(res => setMovies(res));
        if (query.trim() === '') {
            toast.error("Enter movie name", {
                position: "top-center",
            });
        }
    }

    const onChangeForm = e => {
        setQuery(e.target.value);
    }
    return (
        <>
            <ToastContainer/>
            <SearchForm onSubmitForm={onSubmitForm} onChangeForm={onChangeForm} value={query}/>
            <MoviesList movies={movies}/>
        </>
    )
}

export default MoviesPage;