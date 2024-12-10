import { HStack, Switch } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

function Switcher() {
   const {colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack spacing={3}>
        <IoSunny />
        <Switch onChange={toggleColorMode} colorScheme='blue' isChecked={colorMode === 'dark'}/>
        <IoMoon />
    </HStack>
  )
}

export default Switcher
