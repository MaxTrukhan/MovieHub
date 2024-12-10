import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem, Show, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import Nav from './Component/Nav/Nav'
import { GetMovie } from './Hooks/getMoive'
import GridMovie from './Component/Main/GridMovie'
import Genres from './Component/Genres/Genres'


function App() { 


  return (
    <>
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
      <Nav/>
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside'>
        <Genres/>
      </GridItem>
    </Show>
    
    <GridItem area='main'>
        <GridMovie />
    </GridItem>
  </Grid>
    </>
  
  )
}

export default App


