import { useEffect, useState } from "react";
import { apiRequest } from "../Service/apiRequest";
import { CanceledError } from "axios";


interface movie <T>{
    count: number;
    results: T[] 
}


export const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controler = new AbortController
    
        apiRequest.get<movie<T>>(endPoint, {signal: controler.signal})
        .then(res => {
            setData(res.data.results)
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

    return({ data, error, loading})
}

