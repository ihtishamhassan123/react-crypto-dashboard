import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form'
import Prefrence from '../components/Prefrence'
import Layout from '../components/Layout'

const Setting = () => {
  return (
   <Layout>

  
<Flex direction='column' 
w={{base : '90%' , md : '80%'}}
mx='auto' gap='4'>

<Form/>
 <Prefrence/>
 <Box  mb='20px'>
 <Flex  justify='space-between' direction='column' gap="3" >

<Button w='fit-content'>
Change Password
</Button>

<Button variant="outline" colorPalette='purple' w='fit-content'>
Enable Two-Factor Authentication
</Button>

</Flex>

 </Box>
</Flex>
   </Layout>
      
    
  )
}

export default Setting
