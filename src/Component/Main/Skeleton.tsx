import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function Skeletons() {
    const skeletons = [1,2,3,4,5,6]
  return (
    <div>
        {skeletons.map(skeleton => 
            <Card mb={3} overflow={'hidden'} borderRadius={'1rem'} key={skeleton}>
                <Skeleton h={'250px'}/>
                <CardBody>
                 <SkeletonText noOfLines={4}/>
                </CardBody>
               
            </Card>
        )}
    </div>
  )
}

export default Skeletons
