import { Card, Image, CardBody } from '@chakra-ui/react'
import { movieProp } from '../../Hooks/getMoive'

interface Prop {
    movie: movieProp
}


function CardComponent({movie}: Prop) {
  return (
    <Card overflow='hidden' borderRadius={'1rem'}>
        <Image h={'250px'} src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}/>
        <CardBody>
            {movie.title}
        </CardBody>
    </Card>
  )
}

export default CardComponent
