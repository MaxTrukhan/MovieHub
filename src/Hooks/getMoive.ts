import { movieQuery } from "../App";
import { useData } from "./useData";

export interface movieProp {
    id: number;
    title: string;
    backdrop_path: string;
}



 export const GetMovie = (movieQuery: movieQuery) => useData<movieProp>('/discover/movie', {
     params: {
        with_genres: movieQuery.sortGenre?.id,
     }
 }, [movieQuery])
