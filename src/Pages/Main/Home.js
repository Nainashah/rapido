import { Box } from '@mui/system'
import HelloBar from '../../Sections/Main/HelloBar'
import Header from '../../Sections/Main/Header'
import React from 'react'
import HomePage from '../../Sections/Main/HomePage'
import Discount from '../../Sections/Main/Discount'
import Need from '../../Sections/Main/Need'
import Reason from "../../Sections/Main/Reason"
import DownloadApp from '../../Sections/Main/DownloadApp'
import Footer from '../../Sections/Main/Footer'
import Customer from '../../Sections/Main/Customer'


const Home = () => {
  return (
    <Box>
   <HelloBar/>
   <Header/>
   <HomePage/>
   <Discount/>
   <Need/>
   <Reason/>
   <DownloadApp/>
   <Customer/>
   <Footer/>
    </Box>
  )
}

export default Home