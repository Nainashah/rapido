import { Box } from '@mui/system'
import HelloBar from '../../Sections/Main/HelloBar'
import Header from '../../Sections/Main/Header'
import React from 'react'
import HomePage from '../../Sections/Main/HomePage'

const Home = () => {
  return (
    <Box>
   <HelloBar/>
   <Header/>
   <HomePage/>
    </Box>
  )
}

export default Home