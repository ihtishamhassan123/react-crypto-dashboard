import { Badge, Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";



const PortfolioCard = () => {
    const portfolio = [
        {
            id : 1,
            name : "Total Portfolio ",
            Balance : "₹ 112,312.24",
            Badgee : ""
        },
        {
            id : 2,
            name : "Wallet Balances",
            Balance : "22.39401000",
            Badgee: "BTC"
        },
        {
            id : 3,
            name : "Expense",
            Balance : "₹ 1,300.00",
            Badgee : "INR"
        }
    ]
  return (
  <Box      bg='white'
  p='5'
  borderRadius='md'
  border='2px solid red'>
   <Flex gap='20px'  align='center' minH='fit-content' justify='space-between' direction={{base:'column' , lg :'row'}}>
    
   
        <Grid templateColumns={{base : "repeat(2,1fr)" ,md : 'repeat(3,1fr)'} }
    gap={{base : "5",lg :"11"}}>

    {

        portfolio.map((item) =>{
            return(   <Box key={item.id} color='black'>
                    <Text fontSize='xs'>{item.name}</Text>
                    <Flex>

                    <Heading size='xs'>{item.Balance}</Heading>
                    <Badge size='xs' bg='transparent' color='black'>{item.Badgee}</Badge>
                    </Flex>

                </Box>)
        })
    }
    </Grid>
  
    
    <Box  >
    <Flex gap='20px' >
        <Button  size='xs' colorPalette='purple'><PiHandDeposit />

Deposit</Button>
<Button size='xs' colorPalette='purple'><PiHandWithdraw />

WithDraw</Button>
    </Flex>
 </Box>
    </Flex>

   
   
  </Box>
  )
}

export default PortfolioCard
