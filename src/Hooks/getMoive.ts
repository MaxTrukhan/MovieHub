import { useData } from "./useData";

export interface movieProp {
    id: number;
    title: string;
    backdrop_path: string;
}

export const GetMovie = () => useData<movieProp>('/discover/movie')



