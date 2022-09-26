import {
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ToyotaCar from "../../assets/images/ToyotaCar.png";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import EventSeatRoundedIcon from "@mui/icons-material/EventSeatRounded";
import { LocalOfferRounded } from "@mui/icons-material";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";

const CarList = [
  {
    image: [
      {
        url: ToyotaCar,
      },
      {
        url: ToyotaCar,
      },
    ],
    title: "Toyota Corolla",
    price: "1.1 AED/min ",
    features: [
      {
        icon: <EventSeatRoundedIcon />,
        content: "4 seater",
      },
      {
        icon: <AirlineSeatReclineExtraIcon />,
        content: "wide Leg space",
      },
      {
        icon: <AcUnitRoundedIcon />,
        content: "Air Conditioned",
      },
    ],
  },
  {
    image: [
      {
        url: ToyotaCar,
      },
      {
        url: ToyotaCar,
      },
    ],
    title: "Toyota Yaris",
    price: "1.1 AED/min ",
    features: [
      {
        icon: <EventSeatRoundedIcon />,
        content: "4 seater",
      },
      {
        icon: <AirlineSeatReclineExtraIcon />,
        content: "wide Leg space",
      },
      {
        icon: <AcUnitRoundedIcon />,
        content: "Air Conditioned",
      },
    ],
  },
  {
    image: [
      {
        url: ToyotaCar,
      },
      {
        url: ToyotaCar,
      },
    ],
    title: "Nissan Sentra",
    price: "1.1 AED/min",
    features: [
      {
        icon: <EventSeatRoundedIcon />,
        content: "4 seater",
      },
      {
        icon: <AirlineSeatReclineExtraIcon />,
        content: "wide Leg space",
      },
      {
        icon: <AcUnitRoundedIcon />,
        content: "Air Conditioned",
      },
    ],
  },
  {
    image: [
      {
        url: ToyotaCar,
      },
      {
        url: ToyotaCar,
      },
    ],
    title: "Kia Pegas",
    price: "1.1 AED/min ",
    features: [
      {
        icon: <EventSeatRoundedIcon />,
        content: "4 seater",
      },
      {
        icon: <AirlineSeatReclineExtraIcon />,
        content: "wide Leg space",
      },
      {
        icon: <AcUnitRoundedIcon />,
        content: "Air Conditioned",
      },
    ],
  },
];

function YourCars(props) {
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          padding: 2,
          height: props.height,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            height: props.Gridheight,
          }}
        >
          {/* <Stack spacing={4} */}
          <Grid item md={8} xs={12}>
            <CardMedia
              sx={{
                height: "100%",
                objectFit: "contain",
                background:"#D9D9D9",
                borderRadius:"16px",
              }}
              component="img"
              image={props.el.image[0].url}
              alt="car"
            />
          </Grid>
          <Grid item md={4} xs={12} height="100%">
            <Stack justifyContent={"space-between"} height="100%">
              <Stack spacing={2}>
                <Typography variant="h6">{props.el.title}</Typography>
                {props.el.features.map((elm, idx) => (
                  <Stack spacing={2} direction={"row"}>
                    {elm.icon}
                    <Typography>{elm.content}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack spacing={2}>
                <Stack spacing={2} direction={"row"}>
                  <LocalOfferRounded />
                  <Typography>{props.el.price}</Typography>
                </Stack>
                <Link to="/Search-cabs" style={{textDecoration:"none"}}>
                  <Button variant="contained" fullWidth>
                    Book Now
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          {/* </Stack> */}
        </Grid>
      </Card>
    </Grid>
  );
}

const YourCar = () => {
  const isMobile = useResponsive("between", "sm", "xs", "sm");
  const isTablet = useResponsive("between", "sm", "sm", "md");

  const height = isMobile ? "74vh" : isTablet ? "64vh" : "42vh";
  const Gridheight = isMobile ? "42vh" : isTablet ? "25vh" : "40vh";

  return (
    <Container sx={{ marginY: 5 }}>
      <Typography variant="h3">Your Cars</Typography>
      <Grid container spacing={4} marginY={2}>
        {CarList.map((el, idx) => {
          return (
            <YourCars
              height={height}
              Gridheight={Gridheight}
              el={el}
            ></YourCars>
          );
        })}
      </Grid>
    </Container>
  );
};

export default YourCar;
