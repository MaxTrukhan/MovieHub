import { useData } from "./useData";
import { movieProp } from "./getMoive";
import { movieQuery } from "../App";


export const SearchMovie = (movieQuery: movieQuery) => useData<movieProp>('/search/movie', {
    params: {
        query: movieQuery.searchMovie
    } 
}, [movieQuery])