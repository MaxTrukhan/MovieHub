import { HStack, Image } from '@chakra-ui/react'
import Switcher from './Switcher'
import logo from '../../assets/logo.webp'
import Search from './Search'


interface Prop {
  onSearch: (searchMoive: string) => void
}

function Nav({onSearch}: Prop) {
  return (
    <HStack p={10} justifyContent={'space-between'}>
     <Image w={70} src={logo}/>
      <Search onSearch={(searchMoive) => onSearch(searchMoive)}/>
      <Switcher />
    </HStack>
  )
}

export default Nav
