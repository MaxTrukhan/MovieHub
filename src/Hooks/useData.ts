import { useEffect, useState } from "react";
import { apiRequest } from "../Service/apiRequest";
import { AxiosRequestConfig, CanceledError } from "axios";


interface movie <T>{
    count: number;
    results: T[] 
}


export const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controler = new AbortController
        setLoading(true)
        apiRequest.get<movie<T>>(endPoint, {
            signal: controler.signal,
            ...requestConfig
        })
        .then(res => {
            setLoading(false)
            setData(res.data.results)
        })
        .catch(err => {
            if(err instanceof CanceledError){
                setLoading(false)
                setError(err.message)
            }
           return() => controler.abort()
        }) 
    }, deps ? [...deps] : [])

    return({ data, error, loading})
}

