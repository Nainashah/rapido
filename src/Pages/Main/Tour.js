import { Box } from '@mui/material'
import React from 'react'
import WithMainLayout from '../../Layouts/Main'
import TourPackage from '../../Sections/Main/TourPackage'

const Tour = () => {
  return (
   <Box>
      <TourPackage/>
   </Box>
  )
}


const WithLayout = WithMainLayout(Tour);

export default WithLayout;