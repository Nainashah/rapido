import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { margin } from "@mui/system";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import React from "react";
import useResponsive from "../../hooks/useResponsive";

const footerList = [
  {
    title: "Services",
    children: [
      {
        title: "Book cabs",
        href: "#",
      },
      {
        title: "City Tours",
        href: "#",
      },
      {
        title: "Rent a Rapido",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    children: [
      {
        title: "Safety",
        href: "#",
      },
      {
        title: "Terms of use",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Team",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
];

const socialList = [
  {
    icon: <FacebookRounded sx={{ fontSize: 30 }} />,
    href: "#",
  },
  {
    icon: <Instagram sx={{ fontSize: 30 }} />,
    href: "#",
  },
  {
    icon: <Twitter sx={{ fontSize: 30 }} />,
    href: "#",
  },
  {
    icon: <LinkedIn sx={{ fontSize: 30 }} />,
    href: "#",
  },
];
const link = [{}];
const menuList = [
  {
    title: "Returns & Refund",
    href: "#",
  },
  {
    title: "Safety",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const Footer = () => {
  const isMobile = useResponsive("between", "sm", "xs", "sm");
  const isTablet = useResponsive("between", "sm", "sm", "md");
  return (
    <Box py={10} sx={{ background: "#1B2C52", marginTop: 8, color: "#eeee" }}>
      <Container>
        <Grid container direction="row" spacing={4}>
          {footerList.map((el, idx) => (
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <Typography variant={"h6"}>{el.title}</Typography>

                {el.children.map((elm, idx) => (
                  <Typography>{elm.title}</Typography>
                ))}
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Typography variant={"h6"}>Contact Us</Typography>
              <Typography variant={"body2"}>Dubai, karama</Typography>
              <Typography variant={"body2"}>support@rapidogo.com</Typography>
              <Typography variant={"body2"}>+971544374491</Typography>
              <Typography variant={"body2"}>
                Copyright 2022. All Rights Reserved
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" sx={{ my: 4 }} />
        <Grid container direction={"row"} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Follow Us On</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={isMobile || isTablet ? "start" : "end"}
            >
              {socialList.map((el, idx) => el.icon)}
            </Stack>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" sx={{ my: 4 }} />
        <Grid container direction={"row"} spacing={2} alignItems={"center"}>
          <Grid item sx={12} md={6}>
            <Typography variant="h3">Rapido</Typography>
          </Grid>
          <Grid item sx={12} md={6}>
            <Stack direction={"row"} spacing={2} justifyContent={"end"}>
              {menuList.map((el, idx) => (
                <Button variant={"text"}>{el.title}</Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
