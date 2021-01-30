import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {posterpath} from '../requests.js'
import '../styles/movies.css'

function Movies({title , fetchUrl,islarge}) {

    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl])
    
    console.log(movies);
    
    return (
        <>
        
        <div className="container">
        
        <div className="row">
        <h2 className="title">{title}</h2>
            <div className="row-posters">
            
                {
                     movies.map(movie => (
            <img className={islarge ? "large-row-poster" :"row-poster" } src={`${posterpath}${islarge? movie.poster_path:movie.backdrop_path}`} alt=""/>
                ))
                 }
            </div>
            </div>
        </div>
        
        </>
    )
}

export default Movies
