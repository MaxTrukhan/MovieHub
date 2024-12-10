import React from 'react'
import { GenreList, GenresList } from '../../Hooks/getGenres'
import {  Heading, ListItem, List, Box } from '@chakra-ui/react'
import { movieQuery } from '../../App'

interface Prop {
    onSelectGenre: (genre: GenresList) => void
    selectedGenre: movieQuery
}

function Genres({onSelectGenre, selectedGenre}: Prop) {

    const {data} = GenreList()

  return (
    <Box m={3} >

            <Heading mb={5} as={'h1'} >
                Genres  
            </Heading>
            
            <List spacing={3}>
                {data.map(genre => 
                    <ListItem
                     fontWeight={selectedGenre.sortGenre?.name === genre.name ? 'bold': ''}
                     cursor={'pointer'}
                     onClick={() => onSelectGenre(genre)}
                     letterSpacing={1} 
                     fontSize={'xl'} 
                     key={genre.id}>
                        {genre.name}
                    </ListItem>
                )}
            </List>
    </Box>
  )
}

export default Genres
