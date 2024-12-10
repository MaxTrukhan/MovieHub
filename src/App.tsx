import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem, Show, Spinner, Text } from '@chakra-ui/react'
import Nav from './Component/Nav/Nav'
import { GetMovie } from './Hooks/getMoive'



function App() { 

  const {movies, loading, error} = GetMovie()
  return (
    <>
    <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <Nav/>
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside'>
        aside
      </GridItem>
    </Show>
    
    <GridItem area='main'>
      
    </GridItem>
  </Grid>
    </>
  
  )
}

export default App


