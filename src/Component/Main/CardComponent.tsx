import { Card, Image, CardBody } from '@chakra-ui/react'
import { movieProp } from '../../Hooks/getMoive'

interface Prop {
    movie: movieProp
}


function CardComponent({movie}: Prop) {
  return (
    <Card overflow='hidden' borderRadius={'1rem'}>
        <Image  src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}/>
        <CardBody fontSize={'xl'}>
            {movie.title}
        </CardBody>
    </Card>
  )
}

export default CardComponent
