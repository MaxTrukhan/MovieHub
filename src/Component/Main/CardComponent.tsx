import { Card, Image, CardBody } from '@chakra-ui/react'
import { movieProp } from '../../Hooks/getMoive'
import { NoImg } from '../../Service/NoImg'


interface Prop {
    movie: movieProp
}


function CardComponent({movie}: Prop) { 
  return (
    <Card overflow='hidden' borderRadius={'1rem'}>
        <Image maxH={'300px'} src={NoImg(  movie.backdrop_path)}/>
        <CardBody fontSize={'xl'}>
            {movie.title}
        </CardBody>
    </Card>
  )
}

export default CardComponent
