import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";

import {useDispatch} from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows} from "../../features/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch();
    const searchMovie = 'Harry'
    const searchShow = 'Friends'
    useEffect(()=>{
        dispatch(fetchAsyncMovies(searchMovie));
        dispatch(fetchAsyncShows(searchShow));
    });

    return (
        <div className="home">
            <div className="banner-image"></div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;