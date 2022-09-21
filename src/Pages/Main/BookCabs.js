import { Box } from "@mui/material";
import React from "react";
import WithMainLayout from "../../Layouts/Main";
import Book from "../../Sections/Main/Book";


const BookCabs = () => {
  return (
    <Box>
      
      <Book />
      
    </Box>
  );
};

const WithLayout = WithMainLayout(BookCabs);

export default WithLayout;