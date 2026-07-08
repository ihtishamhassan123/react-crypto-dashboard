import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';



const Price = () => {

    const [activeFilter,setActiveFilter] = useState("1H");
    const data =[
        {day: "Mon", value : 40},
        {day: "Tue", value : 60},
        {day: "Wed", value : 20},
        {day: "Thu", value : 100},
    ]
    const filter =[
        {
            id : 1,
            data : "1H"
        },
        {
            id : 2,
            data : "1D"
        },
        {
            id : 3,
            data : "1W"
        },
        {
            id : 4,
            data : "1M"
        }
    ]
  return (
   <Box bg='white' p='4' borderRadius='lg'>
    <Flex direction='column' gap='3'>
    <Flex justify='space-between'>
        <Box>
        <Text fontStyle={{base : 'sm' ,md :'normal'}}>Current Price</Text>
        <Heading size={{base:'sm' , md: 'lg'}}>₹26,670.25</Heading>
      </Box> 
      <Flex gap='2'>
        <Button colorPalette='purple' size='xs'> <FaPlusCircle />Buy</Button>
        <Button colorPalette='purple' size='xs'><FaCircleMinus />
Sell</Button>
      </Flex>

    </Flex>
    <Flex w='100%' justify='end'  >

   <Flex bg='#EEEEF4' gap='3' p='1' borderRadius='md'>
    {
        filter.map((item) =>{
            return(<Box p='1' borderRadius='md' fontSize={{base:'xs'}} color={ item.data === activeFilter ? "blackAlpha.950" : "blackAlpha.600" } cursor='pointer' bg={ item.data === activeFilter ? "white" : "transparent"} onClick={()=>setActiveFilter(item.data)} key={item.id}>{item.data}</Box>)
        })
    }
    </Flex>=
     </Flex>

     <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="purple" strokeWidth={2}    />
      <XAxis dataKey="day" />
      <YAxis width="auto"  />
     
      <Tooltip />
     
    </LineChart>
    </Flex>
   </Box>
  )
}

export default Price
