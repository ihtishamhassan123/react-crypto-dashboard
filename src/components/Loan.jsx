import { Badge, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Loan = () => {
  return (
   <Flex  h='fit-content' borderRadius='xl' bg='white' p='4' direction='column' gap='4'>
   <Badge w='fit-content' bg='purple' borderRadius='xl' color='white'>Loan</Badge>
   <Text maxW='100%' fontSize='sm'>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
   </Flex>
  )
}

export default Loan
