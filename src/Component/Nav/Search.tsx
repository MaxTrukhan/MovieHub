import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { IoMdSearch } from "react-icons/io";

interface Prop {
    onSearch: (searchMoive: string) => void
}

function Search({onSearch}: Prop) {

    const ref = useRef<HTMLInputElement>(null)



  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) {
            onSearch(ref.current.value)
        } 
    }}>
        <Box w={'100%'}>
            <InputGroup>
                <InputLeftElement>
                    <IoMdSearch/>
                </InputLeftElement>
                
                <Input ref={ref} w={'100%'}  borderRadius={'2rem'} fontWeight={'bold'} letterSpacing={1}/>
            </InputGroup >
        </Box>
    </form>
    
  )
}

export default Search
