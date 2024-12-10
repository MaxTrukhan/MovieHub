import { useEffect, useState } from "react";
import { apiRequest } from "../service/apiRequest";
import { CanceledError } from "axios";

export interface movieProp {
    id: number;
    title: string;
    backdrop_path: string;
}

interface movie {
    count: number;
    results: movieProp[] 
}


export const GetMovie = () => {
    const [movies, setMovies] = useState<movieProp[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controler = new AbortController
    
        apiRequest.get<movie>('/movie', {signal: controler.signal})
        .then(res => {
            setMovies(res.data.results)
            setLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError){
                setError(err.message)
                setLoading(false)
            }
           return() => controler.abort()
        }) 
    }, [])

    return({movies, error, loading})
}

