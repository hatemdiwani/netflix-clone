import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests'
import {posterpath} from '../requests'
import '../styles/banner.css'
import {Button} from 'antd'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
       async function fetchData(){
             await axios.get(requests.fetchHorrorMovies)
            .then((response) =>{
                setMovie(
                    response.data.results[
                        Math.floor(Math.random() * response.data.results.length -1)
                    ]
                )
            })
       }
       fetchData();
    }, [])
    
    return (
                <div className="banner">
                    <img src={`${posterpath}${movie.backdrop_path} `}alt="" className="banner-cover"/>
                   
                    <div className="banner-contents">
                    <h1 className="banner-title">{movie.original_title}</h1>
                    <Button className="banner-button">Play</Button>
                    <Button className="banner-button">My List</Button>
                    <p className="description">
                        {movie.overview}
                    </p>
                
                    </div>
                
                </div>
    )
}


export default Banner
