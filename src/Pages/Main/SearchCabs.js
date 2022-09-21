import { Box } from "@mui/material";
import React from "react";
import WithMainLayout from "../../Layouts/Main";
import CabSearch from "../../Sections/Main/CabSearch";

const SearchCabs = () => {
  return (
    <Box>
      <CabSearch />
    </Box>
  );
};


const WithLayout = WithMainLayout(SearchCabs);

export default WithLayout;
