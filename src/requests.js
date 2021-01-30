const API_KEY = "f434ec6d6829d4e972e871735fa7ccfa"
export const posterpath = "https://image.tmdb.org/t/p/w500"

 const requests = {
    fetchTrending: `/trending/all/day?api_key=f434ec6d6829d4e972e871735fa7ccfa`,
    fetchNetflixOriginals: `/movie/popular?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
}

export default requests;