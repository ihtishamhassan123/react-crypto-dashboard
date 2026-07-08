import React, { useState } from 'react'
import { Box, Button, Flex, Input, Text, Grid, Heading } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import Layout from '../components/Layout';

const TransactionPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

           

  const columns = "1fr 1.5fr 1.5fr 1.5fr 1fr";
  const headers = ["ID", "Date & Time", "Type", "Amount", "Status"];

  const transactions = [
    { id: "TXN8K2M9", date: "2022-06-09 7:06 PM", type: "INR Deposit", bankType: "Wise", amount: "+ ₹81,123.10", secondaryAmount: "", status: "Pending" },
    { id: "TXN4P7D1", date: "2022-05-27 12:32 PM", type: "BTC Sell Trade", bankType: "Binance", amount: "- 12.48513391 BTC", secondaryAmount: "+ $81,123.10", status: "Completed" },
    { id: "TXN2Q8L6", date: "2022-03-11 9:15 AM", type: "ETH Buy Trade", bankType: "Coinbase", amount: "+ 2.54 ETH", secondaryAmount: "- $4,850.00", status: "Completed" },
    { id: "TXN7W3N4", date: "2022-02-02 5:20 PM", type: "INR Deposit", bankType: "JazzCash", amount: "+ ₹15,500.00", secondaryAmount: "", status: "Cancelled" },
    { id: "TXN9X5A3", date: "2022-04-18 3:45 PM", type: "INR Withdraw", bankType: "HBL", amount: "- ₹25,000.00", secondaryAmount: "", status: "Processing" },

  ];

  const statusColors = {
    Pending: { bg: "orange.100", color: "orange.700" },
    Processing: { bg: "blue.100", color: "blue.700" },
    Completed: { bg: "green.100", color: "green.700" },
    Cancelled: { bg: "red.100", color: "red.700" }
  };
  const filterdTransaction = activeFilter === "All" ? transactions : transactions.filter((item) => (item.type.toLowerCase().includes(activeFilter.toLowerCase()))) 
  const searchFunction = filterdTransaction.filter((item) => (item.id.toLowerCase().includes(search.toLowerCase()))  ) ||        filterdTransaction.filter((item) => (item.bankType.toLowerCase().includes(search.toLowerCase()))  )                                
const allCount = transactions.length;
const depositCount = transactions.filter((item)=>(item.type.includes("Deposit"))).length;
const withdrawCount = transactions.filter((item)=>(item.type.includes("Withdraw"))).length;
const tradeCount = transactions.filter((item)=>(item.type.includes("Trade"))).length;

const filter = [
  { id: 1, name: "All", count: allCount },
  { id: 2, name: "Deposit", count: depositCount },
  { id: 3, name: "Withdraw", count: withdrawCount },
  { id: 4, name: "Trade", count: tradeCount },
];   
  return (
    <Layout>
      <Box
        w="100%"
        maxW={{ base: "100%", lg: "80%" }}
        mx="auto"
        px={{ base: 3, md: 5 }}
        py={4}
      >
        <Flex w="100%" justify="end" mb={3}>
          <Button colorPalette="purple" size="xs">
            <FaArrowDown />
            Export CSV
          </Button>
        </Flex>

        {/* ✅ minH="calc(100vh - 80px)" fills the full grey background */}
        <Box
          w="100%"
          bg="white"
          borderRadius="xl"
          p={4}
          
          boxShadow="sm"
        >
          

              <Flex justify="space-between" 
              align="center"
              gap={{base : '6'}}
              direction={{base : 'column' , md : 'row'}}

              > <Flex gap={{base : '5' ,  lg : '10'}}>
                {filter.map((item) => (
                 <Flex    key={item.id} 
                 >
                 <Flex 
                  
                 
                    cursor="pointer"
                    align="center"
                    gap="1"
                    pb="1"
                    borderBottomWidth={item.name === activeFilter ? "2px" : "0"}
                    borderBottomColor={item.name === activeFilter ? "purple" : "white"}
                    transition="0.2s"
                    onClick={() => setActiveFilter(item.name)}
                  >
                    <Text fontSize="sm">{item.name}</Text>
                    <Box color="#797E82" bg="#F3F3F7" borderRadius="lg" 
                    fontSize="xs" px="1" w="fit-content" h="fit-content" textAlign="center">
                      {item.count}   
                    </Box>
                  </Flex>
                  </Flex>
                ))}
</Flex>
                <Box position="relative"
                w={{base : '100%' ,md : '200px'}}
                >
                  <Input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search by ID or destination"
                   pl="30px" 
                   size="xs"
                   borderRadius="lg" />
                  <Box position="absolute" top="8px" left="10px" color="#797E82">
                    <IoIosSearch />
                  </Box>
                </Box>
              </Flex>

              <Box borderColor="#EEEEF4" borderBottomWidth="1px" mt={3} mb={3}>
                <Grid templateColumns={columns}>
                  {headers.map((item, index) => (
                    <Text 
                    display={{base : 'none' , md : 'block'}}
                     key={index} color="#797E82" fontSize="sm">{item}</Text>
                  ))}
                </Grid>
              </Box>

              {searchFunction.length === 0?  <Box w='100$' color='red'
              fontWeight='bold'
              display={{base : 'none' ,md : 'block'}}
              
              textAlign='center'>No transactions found</Box>: searchFunction.map((item) => (
                <Box key={item.id} mt={5} py={1}
                display={{base : 'none' , md : 'block'}}
                
                borderBottomWidth="1px"
                 borderColor="#EEEEF4">
                  <Grid templateColumns={columns}>
                    <Heading size="sm">{item.id}</Heading>
                    <Heading size="sm">{item.date}</Heading>
                    <Box>
                      <Heading size="sm">{item.type}</Heading>
                      <Text textStyle="xs">{item.bankType}</Text> 
                    </Box>
                    <Box>
                      <Heading size="sm">{item.amount}</Heading>
                      <Text textStyle="xs">{item.secondaryAmount}</Text>
                    </Box>
                    <Box
                      textStyle="xs"
                      bg={statusColors[item.status].bg}
                      color={statusColors[item.status].color}
                      w="fit-content"
                      h="fit-content"
                      borderRadius="xl"
                      px={1}
                    >
                      {item.status}
                    </Box>
                  </Grid>
                </Box>
              ))}
      
        </Box>
 <Flex direction='column'
 bg='transparent' gap='2'
 mt='2'>
{
  searchFunction.length === 0 ? <Box w='100$' color='red'
  fontWeight='bold'
  display={{base : 'block' ,md : 'none'}}

  textAlign='center'>No transactions found</Box> : searchFunction.map((item) =>(

    <Flex key={item.id}
    direction='column'
    bg='white'
    p='4'
    borderRadius='lg'
    
    display={{base : 'block' ,md : 'none'}}
    >
    <Flex justify='space-between'>
    <Heading size="sm">{item.type}</Heading>
    <Box
                textStyle="xs"
                bg={statusColors[item.status].bg}
                color={statusColors[item.status].color}
                w="fit-content"
                h="fit-content"
                borderRadius="xl"
                px={1}
              >
                {item.status}
              </Box>
         
    </Flex>
    <Heading size="sm">{item.id}</Heading>
    <Heading size="sm">{item.date}</Heading>

    <Text textStyle="xs">{item.bankType}</Text> 
    <Heading size="sm">{item.amount}</Heading>

  </Flex>
  ))
}
</Flex>
      </Box>
    </Layout>
  );
};

export default TransactionPage;