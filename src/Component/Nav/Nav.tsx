import { HStack, Image } from '@chakra-ui/react'
import Switcher from './Switcher'
import logo from '../../assets/logo.webp'
import Search from './Search'

function Nav() {
  return (
    <HStack p={10} justifyContent={'space-between'}>
     <Image w={70} src={logo}/>
      <Search />
      <Switcher />
    </HStack>
  )
}

export default Nav
