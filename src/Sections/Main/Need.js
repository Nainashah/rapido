import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import dailyCar from "../../assets/images/dailyCar.jpg";
import TourCar from "../../assets/images/TourCar.png";
import RentalCar from "../../assets/images/Rental.jpg";
import React from "react";

const cardList = [
  {
    image: dailyCar,
    title: "Daily Rides",
    subtitle:
      "The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as AED 2/km, you can choose from a wide range of options!",
  },
  {
    image: TourCar,
    title: "City Tours",
    subtitle:
      "The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as AED 2/km, you can choose from a wide range of options!",
  },
  {
    image: RentalCar,
    title: "Rentals",
    subtitle:
      "With Rapido Rentals you get a cab at your disposal. So be it a day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours! ",
  },
];

function RideCard(props) {
  return (
    <Grid item sm={12} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={props.el.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.el.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

const Need = () => {
  return (
    <Container spacing={8} sx={{ marginTop: 10 }}>
      <Stack py={8}>
        <Typography variant={"h4"}>A Ride For Every Need</Typography>
        <Typography variant={"body"}>
          Rapido offers various plans to meet your demands be it daily commute
          or a day out with friends & family
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {cardList.map((el, idx) => {
          return <RideCard el={el}></RideCard>;
        })}
      </Grid>
    </Container>
  );
};

export default Need;
