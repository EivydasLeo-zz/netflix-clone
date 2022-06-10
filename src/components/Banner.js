import React, {useEffect, useState} from 'react';
import requests from "../apis/requests";
import instance from "../apis/netflix";

import {FaPlay} from "@react-icons/all-files/fa/FaPlay";
import {AiOutlineInfoCircle} from "@react-icons/all-files/ai/AiOutlineInfoCircle";

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
                    <button className="banner__button">
                        <FaPlay fontSize="28px" />
                        <span className="banner__button-text">Play</span>
                    </button>
                    <button className="banner__button">
                        <AiOutlineInfoCircle fontSize="28px"/>
                        <span className="banner__button-text">More Info</span>
                    </button>
                </div>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    );
};

export default Banner;
