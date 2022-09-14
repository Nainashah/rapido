import React from "react";

// @mui
import { Box, Container, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

//icons
import {
  Phone,
  MailOutline,
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import useResponsive from "../../hooks/useResponsive";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[200],
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },
}));

const contactList = [
  {
    icon: <Phone sx={{ fontSize: 20 }} />,
    content: "+971506831025",
    href: "tel:+971506831025",
  },

  {
    icon: <MailOutline sx={{ fontSize: 20 }} />,
    content: "support@rapidogo.com",
    href: "mailto:support@rapidogo.com",
  },
];

const socialList = [
  {
    icon: <FacebookRounded sx={{ fontSize: 20 }} />,
    href: "#",
  },
  {
    icon: <Instagram sx={{ fontSize: 20 }} />,
    href: "#",
  },
  {
    icon: <Twitter sx={{ fontSize: 20 }} />,
    href: "#",
  },
  {
    icon: <LinkedIn sx={{ fontSize: 20 }} />,
    href: "#",
  },
];
 
const HelloBar = () => {
  const isMobile = useResponsive("between","sm","xs","sm");
  return (
    <StyledBox>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} py={1}>
          {!isMobile && 
          <Stack direction={"row"} spacing={3}>
            {contactList.map((el, idx) => (
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                {el.icon}
                <Typography variant={"caption"}>{el.content}</Typography>
              </Stack>
            ))}
          </Stack>
          }
          <Stack direction={"row"} width={"100%"} spacing={2} justifyContent={isMobile?"center":"end"} >
            {socialList.map((el, idx) => el.icon)}
          </Stack>
        </Stack>
      </Container>
    </StyledBox>
  );
};

export default HelloBar;
