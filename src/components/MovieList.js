import React from 'react';
import MovieItem from "./MovieItem";
import requests from "../apis/requests";

const MovieList = () => {
    return (
        <div className="row__list">
            <MovieItem title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
            <MovieItem title="Trending now" fetchUrl={requests.fetchTrending}/>
            <MovieItem title="Top rated" fetchUrl={requests.fetchTopRated}/>
            <MovieItem title="Action movies" fetchUrl={requests.fetchActionMovies}/>
            <MovieItem title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
            <MovieItem title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
            <MovieItem title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
            <MovieItem title="Documentary movies" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
};

export default MovieList;
