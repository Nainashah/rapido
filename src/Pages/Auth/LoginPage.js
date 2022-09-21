import React from "react";
import { Box } from "@mui/material";
import Login from "../../Sections/Auth/Login";
import WithMainLayout from "../../Layouts/Main";

const LoginPage = () => {
  return (
    <Box>
      <Login />
    </Box>
  );
};


const WithLayout = WithMainLayout(LoginPage);

export default WithLayout;
