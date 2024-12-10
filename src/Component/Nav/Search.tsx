import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <Box w={'100%'}>
        <InputGroup>
            <InputLeftElement>
                <IoMdSearch/>
            </InputLeftElement>
            
            <Input w={'100%'}  borderRadius={'2rem'} fontWeight={'bold'} letterSpacing={1}/>
        </InputGroup >
    
    </Box>
  )
}

export default Search
