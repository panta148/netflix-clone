import React, { useState, useEffect } from 'react'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css'
const base_url = "http://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },

    };
    const handleClick = (movie) => {
        console.log('now clicked');
        if (trailerUrl) {
            console.log('hello man');
            settrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    settrailerUrl(urlParams.get("v"));
                }).catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {
                    movies.map((movie) => (
                        <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} onClick={() => handleClick(movie)} key={movie.id} alt={movie.id} className={`row_img ${(isLargeRow && "row_posterlarge")}`} />
                    )
                    )
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

