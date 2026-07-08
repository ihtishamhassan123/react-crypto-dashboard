import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSupport } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from 'react-router-dom';





const Sidebar = ({isDrawer}) => {
    const topMenu = [
       { id:1,
        name: "DashBoard",
        icon:MdWindow,
        path : "/"
    },
    { id:2,
        name: "Transaction",
        icon:GrTransaction,
        path : "/transaction"
    }

       ];
       const bottomMenu = [
        { id:1,
         name: "Support",
         icon:BiSupport,
         path : "/support"
     },
     { id:2,
        name: "Setting",
        icon:BiSupport,
        path : "/setting"
    },
   
 
        ];
  return (
    <Flex direction='column' w='250px' align='center'
     borderWidth='1px' maxH='100vh'
      justify='space-between'
     position={isDrawer ? "static" : "fixed"}
     top='0'
     left='0' h='100vh'>
        <Box  mt='54px'>
            <Heading size='sm' pl='18px' mb='24px' color='#5F00D9'>@DOSOMECODING</Heading>
            { topMenu.map((item)=> {
            const Icon =item.icon
                return(<NavLink to={item.path} key={item.id}>
                    {({isActive})=>(
                        <Flex onClick={()=>setActiveMenu(item.name)}  bg={isActive ? "#EEEEF4": 'transparent'} w='220px' borderRadius='sm' h='42px' pl='16px' gap='2' cursor='pointer' align='center' fontSize='sm'><Icon/><Text>{item.name}</Text></Flex>
                    )
                    }</NavLink>)
            
}) }
        </Box>
        <Box>
            {bottomMenu.map((item)=>

            
            {
                const Icon =item.icon;
            return( <NavLink to={item.path} key={item.id}>{
                ({isActive})=>(
                    <Flex  onClick={()=>setActiveMenu(item.name)} pl='16px' mb='2'  borderRadius='sm' h='40px' w='220px' align='center' gap='2' bg={isActive ? "#EEEEF4" : "transparent" } cursor='pointer' fontSize='sm'><Icon/><Text>{item.name}</Text></Flex>

                )
             }
              </NavLink>
            )
})}
        </Box>
    </Flex>
  )
}

export default Sidebar
