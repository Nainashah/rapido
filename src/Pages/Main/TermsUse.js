import { Box } from '@mui/material';
import React from 'react'
import WithMainLayout from '../../Layouts/Main';
import Terms from '../../Sections/Main/Terms'

const TermsUse = () => {
  return (
    <Box>
  <Terms/>
  </Box>
  )
}

const WithLayout = WithMainLayout(TermsUse);

export default WithLayout;