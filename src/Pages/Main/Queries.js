import { Box } from "@mui/material";
import React from "react";
import WithMainLayout from "../../Layouts/Main";
import Query from "../../Sections/Main/Query";

const Queries = () => {
  return <Box>
    <Query/>
  </Box>
};

const WithLayout = WithMainLayout(Queries);

export default WithLayout;
