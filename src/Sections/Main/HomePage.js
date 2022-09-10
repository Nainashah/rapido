import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import dubai from "../../assets/images/dubai2.jpg";
import dubaiCar from "../../assets/images/dubaiCar.mp4";
import { height } from "@mui/system";
import { CalendarMonth, GpsFixed, LocationCity, LocationOnRounded, NearMeRounded } from "@mui/icons-material";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundRepeat: "none",
      }}
      width={"100%"}
      height={"81vh"}
    >
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 1,
        }}
      >
        <Stack
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"74vh"}
        >
          <Typography variant="h2" py={7} sx={{ color: "#ffffff" }}>
            It’s time to change the <br />
            ride experience
          </Typography>
          <Box
            p={2}
            
            sx={{
              borderRadius: 70,
              background: " #D9D9D9",
              width: "72vw",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={3}>
                
                  <TextField
                    placeholder="Enter Location"
                    fullWidth
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <LocationOnRounded />
                          </IconButton>
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
               
              </Grid>
              <Grid item xs={12} md={3}>
                
                  <TextField
                    placeholder="Enter Destination"
                    fullWidth
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <NearMeRounded />
                          </IconButton>
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
               
              </Grid>
              <Grid item xs={12} md={3}>
                
                  <TextField
                    placeholder="Date/time"
                    fullWidth
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <CalendarMonth />
                          </IconButton>
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
               
              </Grid>
              <Grid item xs={12} md={3}>
                
                  <Button sx={{borderRadius: 10}} py={3} fullWidth variant="contained">Search</Button>
               
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          background: "rgba(000, 000, 000, 0.7)",
          width: "100%",
          height: "81vh",
          position: "absolute",
        }}
        style={{ zIndex: 0 }}
      ></Box>
      <video
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          height: "100%",
          width: "100vw",
        }}
        src={dubaiCar}
        loop
        autoPlay
        playsInline
        muted
        controls={false}
      />
    </Box>
  );
};

export default HomePage;
