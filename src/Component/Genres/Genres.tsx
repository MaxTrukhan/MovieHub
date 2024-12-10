import React from 'react'
import { GenreList } from '../../Hooks/getGenres'
import { Menu, Button, Heading, ListItem, List, Box } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Genres() {

    const {data} = GenreList()

  return (
    <Box m={3} >

            <Heading mb={5} as={'h1'} >
                Genres  
            </Heading>
            
            <List spacing={3}>
                {data.map(genre => 
                    <ListItem letterSpacing={1}  fontSize={'xl'} key={genre.id}>
                        {genre.name}
                    </ListItem>
                )}
            </List>
    </Box>
  )
}

export default Genres
