import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { CiDollar } from "react-icons/ci";

const Transaction = () => {
  const transaction =[
    { id : 1,
      deptype : "INR Deposit",
      date : "2022-06-09",
      amount : "+ ₹81,123.10",
      amount2 : ""

    },
    { id : 2,
      deptype : "BTC Sell",
      date : "2022-05-27",
      amount : "- 12.48513391",
      amount2 : "+ $81,123.10"

    },
    { id : 3,
      deptype : "INR Deposit",
      date : "2022-06-09",
      amount : "+ ₹81,123.10",
      amount2 : ""

    }
  ]
  return (
    <Box bg='white' borderRadius='lg' p='4'>
     <Flex direction='column' gap='3' justify='space-between' h='100%'>
      <Box>
      
      <Text mb='20px'>Recent Transaction</Text>
      { transaction.map((item) =>{
        return(<Flex justify='space-between' key={item.id} align='center'  mt='20px'>
        <Flex gap='4' align='center'>
        <Flex borderRadius='4xl' bg='grey' w='40px' h='40px' justify='center' align='center'><CiDollar />
</Flex>
             <Box>
              <Heading size={{base:'sm' , md: 'lg'}}>{item.deptype}</Heading>
              <Text fontStyle={{base :'xs' ,md : 'normal'}}>{item.date}</Text>
              </Box>
        </Flex>
        <Flex align='end' direction='column' justify='end'>
          <Heading size={{base:'sm' , md: 'lg'}}>{item.amount}</Heading>
          <Text fontStyle={{base : 'sm' ,md :'normal'}} >{item.amount2}</Text>
        </Flex>
      </Flex>
)
      })}
      </Box>
      <Button w='100%' bg='#EEEEF4' color='black'>View All</Button>
     </Flex>
   </Box>
  )
}

export default Transaction
