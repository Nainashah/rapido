import { Box } from "@mui/system";

import React from "react";
import HomePage from "../../Sections/Main/HomePage";
import Discount from "../../Sections/Main/Discount";
import Need from "../../Sections/Main/Need";
import Reason from "../../Sections/Main/Reason";
import DownloadApp from "../../Sections/Main/DownloadApp";

import Customer from "../../Sections/Main/Customer";
import WithMainLayout from "../../Layouts/Main";

const Home = () => {
  return (
    <Box>
      <HomePage />
      <Discount />
      <Need />
      <Reason />
      <DownloadApp />
      <Customer />
    </Box>
  );
};

const WithLayout = WithMainLayout(Home);

export default WithLayout;
