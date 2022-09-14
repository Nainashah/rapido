import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Groups2Icon from "@mui/icons-material/Groups2";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LuggageIcon from "@mui/icons-material/Luggage";
import React from "react";
import useResponsive from "../../hooks/useResponsive";

const discountList = [
  {
    icon: <LocalOfferIcon />,
    title: "Flat 15% off",
    subtitle: "Every month's first ride",
  },
  {
    icon: <LuggageIcon />,
    title: "Free Guide",
    subtitle: "On every tour booking",
  },
  {
    icon: <Groups2Icon />,
    title: "Flat 20% off",
    subtitle: "On each referral",
  },
  {
    icon: <HealthAndSafetyIcon />,
    title: "Safe & Reliable",
    subtitle: "Every ride",
  },
];

const Discount = () => {
  const isDesktop = useResponsive("up","md");
  return (
    <Box>
      <Container>
        <Card sx={{zIndex:2, marginTop:-5,padding:4 }}>
          <Grid container direction={"row"} alignItems={"start"} spacing={2}>
            {discountList.map((el, idx) => (
              <Grid item md={3} xs={12}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={ isDesktop?"center":"start"}>
                  <Stack direction={"row"} spacing={2} >
                    {el.icon}
                    <Stack>
                    
                
                    <Typography variant={"h6"}>{el.title}</Typography>
                    <Typography variant={"body"}>{el.subtitle}</Typography>
                  </Stack>
                   
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Discount;
