import { Box } from '@mui/material'
import React from 'react'
import WithMainLayout from '../../Layouts/Main'
import About from '../../Sections/Main/About'

const AboutUs = () => {
  return (
 <Box>
<About/>
 </Box>
  )
}

const WithLayout = WithMainLayout(AboutUs);

export default WithLayout;