import React from 'react'
import Movies from './Movies'
import requests from '../requests'
import Navbar from './Navbar'
import Banner from './Banner'
import {selecttheme} from '../redux/themeSlice'
import { useSelector } from 'react-redux';

const Home=()=> {
    const theme = useSelector(selecttheme)
    return (

        <div className={theme}>
                <Navbar/>
                <Banner/>
                   <Movies title ="Netflix Originals" fetchUrl ={requests.fetchNetflixOriginals} islarge={true}/>
                   <Movies title ="Trending" fetchUrl ={requests.fetchTrending} islarge={false}/>
                   <Movies title ="Top Rated" fetchUrl ={requests.fetchTopRated} islarge={false}/>
                   <Movies title ="Action" fetchUrl ={requests.fetchActionMovies} islarge={false}/>
                   <Movies title ="Comedy" fetchUrl ={requests.fetchComedyMovies} islarge={false}/>
                   <Movies title ="Horror" fetchUrl ={requests.fetchHorrorMovies} islarge={false}/>
                   <Movies title ="Romance" fetchUrl ={requests.fetchRomanceMovies} islarge={false}/>
                   <Movies title ="Documentaries" fetchUrl ={requests.fetchDocumentaries} islarge={false}/>
        </div>
    )
}

export default Home
