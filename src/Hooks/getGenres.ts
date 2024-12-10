import { useEffect, useState } from "react";
import { apiRequest } from "../Service/apiRequest";
import { CanceledError } from "axios";
import { genresData } from "../Data/Genres";


interface Genres {
    id: number;
    name: string
}

interface movieGenres{
    count: number;
    genres: Genres[] 
}

  export const GenreList = () => ({data: genresData, loading: false, error: null})