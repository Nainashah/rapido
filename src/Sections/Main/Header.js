import React from "react";
import { Styled } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";
import { Container, Stack } from "@mui/system";

const menuList = [
  {
    title: "Your cars",
  },
  {
    title: "Tour Packages",
  },
  {
    title: "Help",
  },
  {
    title: "Safety",
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
  //   height: 60,

  backgroundColor: "#1B2C52",
  width: "100%",
}));

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const Header = () => {
  return (
    <StyledBox py={2}>
      <Container>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="row" spacing={6} alignItems={"center"}>
            <Logo variant={"h3"}>Rapido</Logo>
            <Stack direction={"row"} spacing={2}>
              {menuList.map((el, idx) => (
                <Button variant={"text"}>{el.title}</Button>
              ))}
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button startIcon={<Person />}>Login</Button>
            <Button variant={"contained"}>Sign Up</Button>
          </Stack>
        </Stack>
      </Container>
    </StyledBox>
  );
};

export default Header;
