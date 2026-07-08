import { Badge, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
   <Flex bg='purple' h='fit-content' p='4' borderRadius='xl' direction='column' gap='4'>
   <Badge size='sm' w='fit-content' bg='white' color='purple' borderRadius='xl'>Contact</Badge>
   <Text fontSize='sm' color='white'>Learn more about our real estate, mortgage, and  corporate account services</Text>
   </Flex>
  )
}

export default Contact
