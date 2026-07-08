import { Box, Drawer, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import MobileDrawer from './MobileDrawer'

const Layout = ({children}) => {
  return (
    <Flex>
      <Box w='250px' display={{base:"none", lg : "block"}}>
    <Sidebar />
     </Box>
     <Box flex='1'  bg='#EEEEF4' minH='100vh' display='flex' flexDirection='column'>
     <Drawer.Root placement='start'  >

        <Topbar />
        <MobileDrawer/>
        </ Drawer.Root  >

 {children}
     </Box>
       
    </Flex>
  )
}

export default Layout
