import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Grid, GridItem, Menu, MenuItem, MenuList, Show, SimpleGrid} from '@chakra-ui/react'
import Nav from './Component/Nav/Nav'
import GridMovie from './Component/Main/GridMovie'
import Genres from './Component/Genres/Genres'
import { GenresList } from './Hooks/getGenres'
import SearchedMovie from './Component/Main/SearchedMovie'



export interface movieQuery {
  sortGenre: GenresList | null
  searchMovie: string
}


function App() { 

const [movieQuery, setMovieQuery] = useState<movieQuery>({} as movieQuery)
  return (

    <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={
    {
      base: '1fr',
      lg: '250px 1fr'
    }
  }
  >
    <GridItem area='nav'>
      <Nav onSearch={(searchMoive) => setMovieQuery({...movieQuery, searchMovie: searchMoive})}/>
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside'>
        <Genres selectedGenre={movieQuery} onSelectGenre={(genre) => setMovieQuery({...movieQuery, sortGenre: genre})}/>
      </GridItem>
    </Show>
    
    <GridItem area='main'>
        <SearchedMovie movieQuery={movieQuery}/>
      
        <GridMovie movieQuery={movieQuery}/>
    </GridItem>
  </Grid>
  
  )
}

export default App


