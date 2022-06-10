import React, {useEffect, useState} from 'react';
import requests from "../apis/requests";
import instance from "../apis/netflix";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
            );
            return request;
        }

        fetchData();
    }, []);

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <p className="banner__description">
                    {movie?.overview}
                </p>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">More Info</button>
                </div>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    );
};

export default Banner;
