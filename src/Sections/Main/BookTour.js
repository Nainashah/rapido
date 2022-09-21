import {
  DirectionsCarFilledOutlined,
  GpsFixedRounded,
  LocationOnRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import atlantisnPalm from "../../assets/images/atlantisthepalm.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BookTour = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={5} mt={0.2}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3} marginY={3}>
              <Stack alignItems={"center"}>
                <Typography variant="h4" alignItems={"center"}>
                  Book Tour Package <span style={{ fontSize: 30 }}> </span>
                </Typography>
              </Stack>

              <Stack direction={"row"} justifyContent="space-between">
                <Typography variant="h6">Marina Beach</Typography>
                <Typography variant="body" sx={{ color: "#0040bd" }}>
                  Change
                </Typography>
              </Stack>
              <TextField
                placeholder="Pickup Point"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <GpsFixedRounded />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Date & Time"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <AccessTimeIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant="body2">Number of people</Typography>
              <Box
                sx={{
                  border: "1px solid 	#D3D3D3",
                  borderRadius: "10px",
                }}
              >
                <Stack direction={"row"}>
                  <Typography p={2} variant="body1">
                    01
                  </Typography>
                  <ButtonGroup
                    fullWidth
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button sx={{borderColor: "#D3D3D3"}}
                      fullWidth
                      
                      startIcon={<AddIcon sx={{color:"black"}} />}
                    />
                    <Button  
                      fullWidth sx={{borderTopRightRadius: 8, borderBottomRightRadius: 8,borderColor: "#D3d3d3"}}
                      
                      startIcon={<RemoveIcon sx={{color:"black"}} />}
                    />
                  </ButtonGroup>
                </Stack>
              </Box>
              <Button variant="contained">Search Availability</Button>

              <Box
                width={"100%"}
                padding={2}
                sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
              >
                <Stack spacing={3}>
                  <Typography variant="body2" to="/Book-cabs">
                    Available Rides
                  </Typography>

                  <Box
                    width="100%"
                    sx={{ border: "1px solid #F1F1F1", borderRadius: "10px" }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      spacing={3}
                    >
                      <Stack>
                        <IconButton>
                          <DirectionsCarFilledOutlined />
                        </IconButton>
                        <Typography
                          variant="overline"
                          sx={{
                            textTransform: "capitalize",
                            textDecoration: "none !important",
                          }}
                        >
                          {" "}
                          10 min
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography variant="subtitle2">
                          Toyota Corolla
                        </Typography>
                        <Typography variant="caption">
                          Cab with extra legroom & boot space
                        </Typography>
                      </Stack>
                      <IconButton href="/Book-cabs">
                        <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                      </IconButton>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <img
              src={atlantisnPalm}
              alt=""
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookTour;
