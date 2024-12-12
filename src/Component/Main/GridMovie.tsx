import { Card, SimpleGrid, Image, CardBody, Heading } from '@chakra-ui/react'
import { GetMovie } from '../../Hooks/getMoive'
import { apiRequest } from '../../Service/apiRequest'
import CardConteiner from './CardConteiner'
import CardComponent from './CardComponent'
import Skeletons from './Skeleton'
import CardConteinerSkeleton from './CardConteinerSkeleton'
import { movieQuery } from '../../App'
import Search from '../Nav/Search'
import SearchedMovie from './SearchedMovie'


interface Prop {
    movieQuery: movieQuery
}

function GridMovie({movieQuery}: Prop) {
    const {data, loading, error} = GetMovie(movieQuery)


    if(error)  console.log(error)
return (
<>
    <Heading>{movieQuery.sortGenre?.name}</Heading>
    <SimpleGrid m={3}  spacing={7} columns={{sm: 1, md: 2 , lg: 3}}>
        
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
</>
   
  )
}

export default GridMovie
