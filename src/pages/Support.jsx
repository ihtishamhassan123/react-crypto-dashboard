import React from 'react'
import Sidebar from '../components/Sidebar'
import { Flex, Box, Heading, Text, Grid, Field, Input, Textarea, Checkbox, Button, Badge } from '@chakra-ui/react'
import Topbar from '../components/Topbar'
import { FaSignalMessenger } from "react-icons/fa6";

import { IoMail } from "react-icons/io5";
import Layout from '../components/Layout';


const Support = () => {
  const column = "1fr 1fr";
  return (
        <Layout>
        <Box w={{base : '90%' , md : '80%'}}
         mx='auto'>
          
      
        <Flex 
         direction={{base : "column" ,
        lg:"row" }}
        gap={{base:"5",
      lg : "normal"}}
         justify='space-between'
         >
         <Flex direction='column' 
         gap='2'>
          <Box color='purple'>
         <IoMail />
          </Box>
         <Heading>Contact Us</Heading>
         <Text maxW='300px'>Have a question or just want to know more? Feel free to reach out to us.</Text>
         </Flex>
         <Box bg='white'
         p='4'
         borderRadius='lg'>
          <Text >You will receive response within 24 hours of time of submit.</Text>
          <Grid templateColumns={{
            base : "1fr",
            md : "1fr 1fr"
          }}
          gap='7'
          mt='3'>
          <Field.Root required>
  <Field.Label>
    Name
    <Field.RequiredIndicator />
  </Field.Label>

  <Input placeholder="James" />
</Field.Root>
            <Field.Root required>
              

              <Field.Label>
              Surname 
              <Field.RequiredIndicator/>
                
              </Field.Label>
                <Input placeholder='Arthurs'/>
              
            </Field.Root>
          </Grid>
          <Flex direction='column'
          mt='3'
          gap='4'>
            <Field.Root required>
              <Field.Label>
              Email
              <Field.RequiredIndicator/>
              </Field.Label>
              <Input placeholder='name@mail.com'/>
            </Field.Root>

            <Field.Root required>
              <Field.Label>
              Message
              <Field.RequiredIndicator/>
              </Field.Label>
              <Textarea size='lg' resize="none"/>
            </Field.Root>
            <Checkbox.Root required>
              <Checkbox.HiddenInput/>
              <Checkbox.Control/>
              <Checkbox.Label>I agree with Terms & Conditions.</Checkbox.Label>
            </Checkbox.Root>
            <Button bg='#D8DDE2' color='#797E82'>Send A Message</Button>
            <Button bg='#EEEEF4' color='#171717'>Book a Meeting</Button>
          </Flex>
         </Box>
         
         </Flex>
         <Flex justify='space-between' 
            direction={{base : "column" ,
            lg:"row" }}   
            gap={{base : "5" ,
          lg :"normal"}}
          w='100%' mx='auto' mt='5' mb='4'>
          <Flex direction='column' gap='2'> 
          <Box color='purple'>
          <FaSignalMessenger />
          </Box>
          <Heading>Live Chat</Heading>
          <Text maxW='300px'>Don’t have time to wait for the answer? Chat with us now.</Text>
          </Flex>
          <Box bg='purple' p='4'
    
          w={{base:"100%" ,lg :"61%"}}
          
          borderRadius='xl'>
            <Badge color='purple' borderRadius='xl' mb='4'>ChatBot</Badge>
            <Text color='white'>Chat with us now</Text>
          </Box>
         </Flex>
         </Box>
            </Layout>
  )
}

export default Support
