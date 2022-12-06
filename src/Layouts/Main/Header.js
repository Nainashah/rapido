import React from "react";
import { styled } from "@mui/material/styles";

import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { CancelRounded, MenuRounded, Person } from "@mui/icons-material";
import { Container, Stack } from "@mui/system";
import useResponsive from "../../hooks/useResponsive";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    title: "Your cars",
    href: "/Your-car",
  },

  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Tour Packages",
    href: "/Tour-package",
  },
  {
    title: "Help",
    href: "/help-safety",
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
  const isDesktop = useResponsive("up", "md");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <StyledBox py={2}>
      <Container>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="row" spacing={6} alignItems={"center"}>
            {!isDesktop && (
              <IconButton
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <MenuRounded />
              </IconButton>
            )}
            <Link style={{textDecoration:"none"}} to="/">
              <Logo variant={"h3"}>Rapido</Logo>
            </Link>
            {isDesktop && (
              <Stack direction={"row"} spacing={2}>
                {menuList.map((el, idx) => (
                  <Button variant={"text"} href={el.href}>
                    {el.title}
                  </Button>
                ))}
              </Stack>
            )}
          </Stack>
          <Stack direction="row" spacing={2}>
            {isDesktop && (
              <Button startIcon={<Person />} href="/login">
                Login
              </Button>
            )}

            <Button variant={"contained"}>Download App</Button>
          </Stack>
        </Stack>
      </Container>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Box p={3} sx={{ width: "300px" }}>
          <Stack mb={3} direction={"row"} spacing={2} justifyContent={"end"}>
            <IconButton
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <CancelRounded />
            </IconButton>
          </Stack>

          <Stack direction={"column"} spacing={2} alignItems={"start"}>
            {menuList.map((el, idx) => (
              <Button sx={{ color: "#000" }} variant={"text"} href={el.href}>
                {el.title}
              </Button>
            ))}
          </Stack>
        </Box>
      </SwipeableDrawer>
    </StyledBox>
  );
};

export default Header;
