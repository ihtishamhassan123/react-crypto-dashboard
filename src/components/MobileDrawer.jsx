import React from 'react'
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import Sidebar from './Sidebar'

const MobileDrawer = () => {
  return (

<>
      <Drawer.Trigger asChild>
      
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxW="250px">
          
            <Sidebar isDrawer/>
          
           
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
</>
  


  )
}

export default MobileDrawer
