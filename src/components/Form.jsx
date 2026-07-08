import { Box, Button, Field, Flex, Grid, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Form = () => {
  return (
    <Box bg='white'
    w='100%'
    borderRadius='lg'
    p='4'
    >
    <Flex direction='column' gap='5' >
        <Heading>Profile Information</Heading>
    <Grid templateColumns={{base : "1fr" ,
    md : "1fr 1fr"}}
    gap='8'>
        <Field.Root required>
            <Field.Label >
                Name
                <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder='James'/>
        </Field.Root>
        <Field.Root required>
            <Field.Label >
            Surname
                <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder='Arthur'/>
        </Field.Root>
    </Grid>
    <Field.Root required>
            <Field.Label >
            Email
                <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder='name@mail.com'/>
        </Field.Root>
        <Field.Root required>
            <Field.Label >
            Phone
                <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder='03xx-xxxxxxx'/>
        </Field.Root>
        <Button bg='#EEEEF4' color='#171717'>Save Change</Button>

    </Flex>
    </Box>
  )
}

export default Form
