import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import {} from "phosphor-react";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Book = () => {
  const [lat, setLat] = React.useState(21.84364076030734);
  const [long, setLong] = React.useState(82.75998700000001);

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
    const element = document.getElementById("mapbox");

    if (element) {
      const mapOptions = {
        // How far the maps zooms in.
        zoom: 15,
        // Current Lat and Long position of the pin/
        center: new window.google.maps.LatLng(lat, long),
        disableDefaultUI: true, // Disables the controls like zoom control on the map if set to true
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
      new window.google.maps.Map(element, mapOptions); // Till this like of code it loads up the map.

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
      // const sourceSearchBox = new window.google.maps.places.SearchBox(sourceEl);
      // const destinationSearchBox = new window.google.maps.places.SearchBox(
      //   destinationEl
      // );

      /**
       * When the place is changed on search box, it takes the marker to the searched location.
       */

      // window.google.maps.event.addListener(sourceEl, "places_changes", () => {
      //   const places = sourceSearchBox.getPlaces();
      // });

      // window.google.maps.event.addListener(
      //   destinationEl,
      //   "places_changes",
      //   () => {
      //     const places = destinationSearchBox.getPlaces();
      //   }
      // );

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
    <Box>
      <Container>
        <Grid container spacing={5} mt={0.2}>
          <Grid item xs={12} md={4}>
            <Stack
           
            sx={{width: "100%"}}
              direction={"row"}
              spacing={3}
              justifyContent={"space-between"}
            >
              <IconButton href="/Search-cabs">
                <ArrowBackIcon sx={{ fontSize: 22 }}  />
              </IconButton>
              <Stack sx={{margin: '0 !important'}} direction={"row"} spacing={2} alignItems={"center"}>
                {" "}
                <DirectionsCarFilledIcon sx={{ fontSize: 30 }} />
                <Stack justifyContent={"center"}>
                  <Typography variant="subtitle2">Toyota Corolla</Typography>
                  <Typography variant="caption">10 min away</Typography>
                </Stack>
              </Stack>
              <Box />
            </Stack>

            {/* <Divider width={"100%"} sx={{margin:3}}></Divider> */}
            <Box
              width={"100%"}
              padding={2}
              sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", marginY: 3 }}
            >
              <Stack spacing={3}>
                <Stack
                  direction={"row"}
                  spacing={9}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Pick Up</Typography>
                  <Typography variant="body1">Dubai , Airport</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={10}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Drop</Typography>
                  <Typography variant="body1">Sharjah mall</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={10}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Distance</Typography>
                  <Typography variant="body1">14.6 Km</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={10}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Fare</Typography>
                  <Typography variant="body1">50 AED</Typography>
                </Stack>
                <TextField
                  placeholder="Coupon (Optional)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <LocalOfferIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained">Book & Confirm</Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <div
              id="mapbox"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "400px",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Book;
