import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import FlyingCar from "../../assets/images/fly_car_logo.gif";
const DownloadApp = () => {
  return (
    <Container sx={{ marginY: 10 }}>
      <Grid
        container
        alignItems={"center"}
        spacing={4}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={6}>
          <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <img src={FlyingCar} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <Stack>
              <Typography variant="h2">Book a Rapido today</Typography>
              <Typography variant="subtitle2" py={3}>
                Download the app for exclusive discounts & ease of booking
              </Typography>

              <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <img src={playstore} height={60} />
                <img src={appstore} height={40} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DownloadApp;
