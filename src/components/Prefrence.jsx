import { Flex, Heading, Switch, Text } from '@chakra-ui/react'
import React from 'react'

const Prefrence = () => {
    const prefrence=["Dark Mode","Email Notifications ","SMS Alerts "]
  return (
    <Flex direction='column'
     bg='white'
     w="100%"
     p='4'
     borderRadius='lg'
     gap='5' mb='2' >
        <Heading>Preferences</Heading>
        {
            prefrence.map((item,index)=>(<Flex justify='space-between' align="center"
            key={index}>
            <Text>{item}</Text>
            <Switch.Root>
                <Switch.HiddenInput/>
                <Switch.Control/>
            </Switch.Root>
          </Flex>))
        }
      
    </Flex>
  )
}

export default Prefrence
