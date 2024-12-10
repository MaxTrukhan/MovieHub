import placeHolderImg from '../assets/logo.webp'

export const NoImg = (Img: string) => {
    if(!Img) {
        return  placeHolderImg
    } else {
        return 'https://image.tmdb.org/t/p/original/' + Img
    }
}