import { GpsFixedRounded, LocationOnRounded } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
import React from "react";
import { Link } from "react-router-dom";

const CabSearch = () => {
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
            <Stack spacing={3} marginY={4} >
              <Stack alignItems={"center"}>
                <Typography variant="h4" alignItems={"center"}>
                  Find My Ride <span style={{ fontSize: 30 }}>🚘 </span>
                </Typography>
              </Stack>
              <Stack direction={"row"} justifyContent="space-between" py={4}>
                <Typography variant="h6">
                  Toyota Yaris
                </Typography  >
                <Link to="/Your-car" style={{textDecoration:"none"}}>
                <Typography sx={{ color: "#0040bd" }} variant="body2">
                  Change Preference
                </Typography>
                </Link>
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
                placeholder="Destination"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <LocationOnRounded />
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
              <Button variant="contained">Search Ride</Button>

              <Box
                width={"100%"}
                padding={2}
                sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
              >
                <Stack spacing={3}>
                 
                  <Typography variant="body2"   to="/Book-cabs">Available Rides</Typography>
                 
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
                          <DirectionsCarFilledIcon />
                        </IconButton>
                        <Typography
                          variant="overline"
                          sx={{ textTransform: "capitalize",  textDecoration:"none !important"}}
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
            <div id="mapbox" style={{width: "100%", height: "100%", minHeight: '400px', borderRadius: '10px'}} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CabSearch;
