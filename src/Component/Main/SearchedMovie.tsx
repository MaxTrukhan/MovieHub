import { Card, Image, CardBody, HStack, List, SimpleGrid, Heading } from "@chakra-ui/react"
import { movieQuery } from "../../App"
import { SearchMovie } from "../../Hooks/SearchMovie"
import { NoImg } from "../../Service/NoImg"

interface Prop {
    movieQuery: movieQuery
}

function SearchedMovie({movieQuery}: Prop) {
 const {data} = SearchMovie(movieQuery)
  return (
    <>
        <Heading as={'h1'}>{movieQuery.searchMovie}</Heading>
    <SimpleGrid  m={3} marginBottom={15} borderRadius={'1rem'} overflowX={'scroll'}
     css={{
      '&::-webkit-scrollbar': {
        width: '0px',
      },
    }}
    >

      <HStack minH={'100%'} spacing={5}  minW={'100%'} >
        {data.map(searchMovie => 
          <Card border={'1.5px solid gray'} h={'100%'} maxW={'300px'} minW={'250px'}  overflow='hidden'  borderRadius={'1rem'}>
            <Image h={'70%'} src={NoImg( searchMovie.backdrop_path)}/>
            <CardBody fontSize={'xl'}>
                {searchMovie.title}
            </CardBody>
          </Card>
          )}
      </HStack>
       

    </SimpleGrid>
   
   
    </>
    
  )
}

export default SearchedMovie
