import { Card, SimpleGrid, Image, CardBody } from '@chakra-ui/react'
import { GetMovie } from '../../Hooks/getMoive'
import { apiRequest } from '../../Service/apiRequest'
import CardConteiner from './CardConteiner'
import CardComponent from './CardComponent'
import Skeletons from './Skeleton'
import CardConteinerSkeleton from './CardConteinerSkeleton'
import { movieQuery } from '../../App'


interface Prop {
    movieQuery: movieQuery
}

function GridMovie({movieQuery}: Prop) {
    const {data, loading, error} = GetMovie(movieQuery)

    if(error) return null
  return (
    <SimpleGrid m={3}  spacing={5} columns={{sm: 1, md: 2 , lg: 3}}>

        {data.map(movie => 
        <>      

            { loading ? 
                <CardConteinerSkeleton >
                    <Skeletons />
                </CardConteinerSkeleton>
                :
                <CardConteiner key={movie.id}>
                 <CardComponent key={movie.id} movie={movie}/>
                </CardConteiner> 
            }
        </>
      
        )}
        
    </SimpleGrid>
  )
}

export default GridMovie
