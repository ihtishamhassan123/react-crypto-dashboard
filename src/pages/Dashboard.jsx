import { Box, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Flex} from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import PortfolioCard from '../components/PortfolioCard'
import Price from '../components/Price'
import Transaction from '../components/Transaction'
import Loan from '../components/Loan'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const Dashboard = () => {

  return (
    <Layout>
<Box w={{base : '90%' , md : '80%'}} mx='auto'>
<Flex direction='column'  align='center'>

        <Box border= '2px solid blue' w='100%'>
        <PortfolioCard/>
        </Box>

         
        <Grid templateColumns={{base : 'repeat(1,1fr)',lg : 'repeat(2,1fr)'}} gap='6' w='100%' mt='3' >
            <Price />
            <Transaction/>
            <Loan/>
           <Contact/>
        </Grid>
      
    
</Flex>
</Box>

    </Layout>
  )
}

export default Dashboard
