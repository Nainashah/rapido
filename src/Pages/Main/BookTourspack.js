import { Box } from '@mui/material'
import React from 'react'
import WithMainLayout from '../../Layouts/Main';
import BookTour from '../../Sections/Main/BookTour';
import TourPackage from '../../Sections/Main/TourPackage'

const BookTourspack = () => {
  return (
    <Box>
        <BookTour/>
    </Box>
  )
};
const WithLayout = WithMainLayout(BookTourspack);

export default WithLayout;