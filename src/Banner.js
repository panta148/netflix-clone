import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ".........." : str;
}
const Banner = () => {
    const [movie, setmovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request_data = await axios.get(requests.fetchNetflixOriginal)
            setmovie(request_data.data.results[Math.floor(Math.random() * request_data.data.results.length - 1)]);
            return request_data;
        }
        fetchData();

    }, []);
    return (
        <header className="banner" style={{ backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundSize: "cover", backgroundPosition: "center center", }}>
            <div className="banner_content">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_button">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">Mylist</button>
                </div>
                <h4 className="banner_des">{truncate(movie?.overview, 250)}</h4>
            </div>
            <div className="banner_fade Bottom"></div>

        </header>
    )
}

export default Banner
