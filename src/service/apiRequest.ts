import axios from "axios"

export const apiRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '68c6d5f34953128b232316749eb71740'
    }
})