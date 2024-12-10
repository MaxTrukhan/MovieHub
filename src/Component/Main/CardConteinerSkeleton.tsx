import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Prop {
    children: ReactNode
}
function CardConteinerSkeleton({children}: Prop) {
  return (
    <Box >
      {children}
    </Box>
  )
}

export default CardConteinerSkeleton
