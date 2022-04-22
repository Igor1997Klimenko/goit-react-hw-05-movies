import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const apiFetchMovies = async () => {
    const {
        data: { results },
    } = await axios.get(`/trending/movie/day?page=1&api_key=4867f71c2cc3334fef3a71f8c4706576`);
    return results;
    
};

export const getQueryMovie = async (query) => { 
        const { data: { results } } = await axios.get(`/search/movie?api_key=4867f71c2cc3334fef3a71f8c4706576&query=${query}`);
        return results;
};

export const getMovie = async (id) => {
    const {data} = await axios.get(`/movie/${id}?api_key=4867f71c2cc3334fef3a71f8c4706576`);
    return data;
};

export const getCastMovie = async (id) => {
    const {data} = await axios.get(`/movie/${id}/credits?api_key=4867f71c2cc3334fef3a71f8c4706576`);
        return data.cast;
};

export const getCastReviews = async (id) => {
    const {data: {results}} = await axios.get(`/movie/${id}/reviews?api_key=4867f71c2cc3334fef3a71f8c4706576`);
        return results;
};