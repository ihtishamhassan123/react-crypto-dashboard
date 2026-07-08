import { Avatar, AvatarFallback, Flex, Heading, Box, Drawer} from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";


const Topbar = () => {
  const location = useLocation();
  const title = {
    "/" : "DashBoard",
    "/transaction" : "Transaction",
    "/support" : "Support",
    "/setting" : "Setting"
  }
  return (
    <Flex h='64px'  justify='space-between' align='center' bg='white' mb='4' px='5'>
   <Flex align='center'
   gap='2'>

    <Box display={{base :"block",
    lg : "none"}} >
      <Drawer.Trigger asChild>

    <CiMenuBurger />
      </Drawer.Trigger>
    </Box>
    

     <Heading>{title[location.pathname]}</Heading>
      </Flex>
     
     <Avatar.Root>
        <AvatarFallback/>
     </Avatar.Root>
    </Flex>
  )
}

export default Topbar
