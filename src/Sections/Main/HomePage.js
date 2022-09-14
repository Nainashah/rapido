import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import dubaiCar from "../../assets/images/dubaiCar.mp4";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import {
  CalendarMonth,
  LocationOnRounded,
  NearMeRounded,
} from "@mui/icons-material";
import useResponsive from "../../hooks/useResponsive";

const HighlightedText = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.light,
}))

const HomePage = () => {
  const isMobile = useResponsive("between","sm","xs","sm"); 
  const isTablet = useResponsive("between","sm","sm","md");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  setTimeout(() => {
    function showPosition(position) {
      // if (!store.lat) {
      //   setShopLat(position.coords.latitude);
      // }
      // if (!store.long) {
      //   setShopLong(position.coords.longitude);
      // }
    }

    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    let city;
    let infoWindow = "";
    const sourceEl = document.querySelector("#source-search");
    const destinationEl = document.querySelector("#destination-search");
    const element = document.getElementById("map-canvas");

    if (sourceEl && destinationEl) {
      const mapOptions = {
        // How far the maps zooms in.
        zoom: 10,
        // Current Lat and Long position of the pin/
        center: new window.google.maps.LatLng(lat, long),
        disableDefaultUI: false, // Disables the controls like zoom control on the map if set to true
        scrollWheel: true, // If set to false disables the scrolling on the map.
        draggable: true, // If set to false , you cannot move the map around.
        // mapTypeId: google.maps.MapTypeId.HYBRID, // If set to HYBRID its between sat and ROADMAP, Can be set to SATELLITE as well.
        // maxZoom: 11, // Wont allow you to zoom more than this
        // minZoom: 9  // Wont allow you to go more up.
      };

      /**
       * Creates the map using google function google.maps.Map() by passing the id of canvas and
       * mapOptions object that we just created above as its parameters.
       *
       */
      // Create an object map with the constructor function Map()
      // const map = new window.google.maps.Map(element, mapOptions); // Till this like of code it loads up the map.

      /**
       * Creates the marker on the map
       *
       */
      // const marker = new window.google.maps.Marker({
      //   position: mapOptions.center,
      //   map,
      //   // icon: 'http://pngimages.net/sites/default/files/google-maps-png-image-70164.png',
      //   draggable: true,
      // });

      /**
       * Creates a search box
       */
      const sourceSearchBox = new window.google.maps.places.SearchBox(sourceEl);
      const destinationSearchBox = new window.google.maps.places.SearchBox(
        destinationEl
      );

      /**
       * When the place is changed on search box, it takes the marker to the searched location.
       */

      window.google.maps.event.addListener(sourceEl, "places_changes", () => {
        const places = sourceSearchBox.getPlaces();
      });

      window.google.maps.event.addListener(
        destinationEl,
        "places_changes",
        () => {
          const places = destinationSearchBox.getPlaces();
        }
      );

      // window.google.maps.event.addListener(searchBox, "places_changed", () => {
      //   const places = searchBox.getPlaces();
      //   const bounds = new window.google.maps.LatLngBounds();
      //   let i;
      //   let place;
      //   const addresss = places[0].formatted_address;

      //   // for (i = 0; (place = places[i]); i++) {
      //   //   bounds.extend(place.geometry.location);
      //   //   marker.setPosition(place.geometry.location); // Set marker position new.
      //   // }

      //   // map.fitBounds(bounds); // Fit to the bound
      //   // map.setZoom(15); // This function sets the zoom to 15, meaning zooms to level 15.
      //   // // console.log( map.getZoom() );

      //   // const lat = marker.getPosition().lat();
      //   // const long = marker.getPosition().lng();
      //   // setLat(lat);
      //   // setLong(long);

      //   const resultArray = places[0].address_components;

      //   let citi;

      //   // Get the city and set the city input value to the one selected
      //   for (let a = 0; a < resultArray.length; a++) {
      //     if (
      //       resultArray[i].types[0] &&
      //       resultArray[i].types[0] === "administrative_area_level_2"
      //     ) {
      //       citi = resultArray[i].long_name;
      //       // city.value = citi;
      //     }
      //   }

      //   // // Closes the previous info window if it already exists
      //   // if (infoWindow) {
      //   //   infoWindow.close();
      //   // }
      //   // /**
      //   //  * Creates the info Window at the top of the marker
      //   //  */
      //   // infoWindow = new window.google.maps.InfoWindow({
      //   //   content: addresss,
      //   // });

      //   // infoWindow.open(map, marker);
      // });
    }
  }, 1000);
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
          transform: "translate(-50%,-60%)",
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
            <HighlightedText variant="h1">ride experience</HighlightedText>
            
          </Typography>
          <Box
            p={2}
            sx={{

            
              borderRadius:   isTablet || isMobile ? 1:70,
              background: " #FFF",
              width:  !isMobile && !isTablet?"72vw":"90vw",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="source-search"
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
                  id="destination-search"
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
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <MobileDateTimePicker
                    onChange={() => {}}
                    inputFormat="dddd/MM/yyyy hh:mm a"
                    renderInput={(params) => (
                      <TextField
                        placeholder="Date/Time"
                        {...params}
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
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  sx={{ borderRadius: 10 }}
                  py={3}
                  fullWidth
                  variant="contained"
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          background: "rgba(000, 000, 000, 0.5)",
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
          width: "100%",
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
