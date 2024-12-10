import React, { ReactNode } from 'react'
import { movieProp } from '../../Hooks/getMoive'
import { Box } from '@chakra-ui/react'

interface Prop {
    children: ReactNode
}

function CardConteiner({children}: Prop) {
  return (
    <Box>
        {children}
    </Box>

  )
}

export default CardConteiner
