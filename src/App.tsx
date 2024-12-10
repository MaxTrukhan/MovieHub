import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './Component/Nav/Nav'

function App() {

  return (
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
      main
    </GridItem>
  </Grid>
  )
}

export default App
