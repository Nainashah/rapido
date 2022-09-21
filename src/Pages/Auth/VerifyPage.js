import React from "react";
import { Box } from "@mui/material";

import Verify from "../../Sections/Auth/Verify";
import WithMainLayout from "../../Layouts/Main";

const VerifyPage = () => {
  return (
    <Box>
      <Verify />
    </Box>
  );
};


const WithLayout = WithMainLayout(VerifyPage);

export default WithLayout;
