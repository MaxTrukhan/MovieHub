import { useEffect, useState } from "react";
import { apiRequest } from "../Service/apiRequest";
import { CanceledError } from "axios";
import { genresData } from "../Data/Genres";


 export interface GenresList {
    id: number;
    name: string
}

  export const GenreList = () => ({data: genresData, loading: false, error: null})