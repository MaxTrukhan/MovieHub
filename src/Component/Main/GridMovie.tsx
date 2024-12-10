import { Card, SimpleGrid, Image, CardBody } from '@chakra-ui/react'
import { GetMovie } from '../../Hooks/getMoive'
import { apiRequest } from '../../Service/apiRequest'
import CardConteiner from './CardConteiner'
import CardComponent from './Card'


function GridMovie() {
    const {data, loading, error} = GetMovie()
  return (
    <SimpleGrid m={3}  spacing={5} columns={{sm: 1, md: 2 , lg: 3}}>
        {data.map(movie => 
            <CardConteiner >
             <CardComponent movie={movie}/>
            </CardConteiner>
        )}
        
    </SimpleGrid>
  )
}

export default GridMovie
