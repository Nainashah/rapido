import { Box } from '@mui/material';
import React from 'react'
import WithMainLayout from '../../Layouts/Main';
import YourCar from '../../Sections/Main/YourCar';

const YourCars = () => {
  return (
    <Box>
      <YourCar/>
   </Box>
  )
}


const WithLayout = WithMainLayout(YourCars);

export default WithLayout;