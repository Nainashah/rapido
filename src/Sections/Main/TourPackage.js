import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import React from "react";
import burjkhalifa from "../../assets/images/burjkhalifa.png";
import Burjkhalifa1 from "../../assets/images/Burjkhalifa1.png";

import StarIcon from "@mui/icons-material/Star";
import DubaiPark from "../../assets/images/DubaiPark.png";
import Dubaiframe from "../../assets/images/Dubaiframe.png";
import dubaiframe2 from "../../assets/images/dubaiframe2.PNG";
import Museum from "../../assets/images/Museum.png";
import dubaiMuseum1 from "../../assets/images/dubaiMuseum1.png";
import palmbeach from "../../assets/images/palmbeach.png";
import global from "../../assets/images/global.jpg";
import globalVillage from "../../assets/images/globalVillage.png";
import beach from "../../assets/images/beach.png";
import alseef from "../../assets/images/alseef.png";
import jabeljais1 from "../../assets/images/jabeljais1.png";
import jabeljas from "../../assets/images/jabeljais.png";
import { Link } from "react-router-dom";
const TourList = [
  {
    Image: [
      {
        url: burjkhalifa,
      },
      {
        url: Burjkhalifa1,
      },
    ],
    title: "Burj Khalifa",
    subtitle: "30min",

    number: 4.96,
    price: 99,
  },
  {
    Image: [
      {
        url: palmbeach,
      },
      {
        url: beach,
      },
    ],
    title: "Palm jumeira Beach",
    subtitle: "30min",

    number: 4.9,
    price: 99,
  },
  {
    Image: [
      {
        url: global,
      },
      {
        url: globalVillage,
      },
      // {
      //   url: DubaiMuseum,
      // },
    ],
    title: "Global Village",
    subtitle: "45 min",

    number: 4.96,
    price: 110,
  },
  {
    Image: [
      {
        url: burjkhalifa,
      },
      {
        url: alseef,
      },
    ],
    title: "Burj Khalifa+ AL Seef",
    subtitle: "40min",

    number: 4.9,
    price: 130,
  },
  {
    Image: [
      {
        url: DubaiPark,
      },
      {
        url: Dubaiframe,
      },
    ],
    title: "Dubai frame",
    subtitle: "30min",

    number: 4.9,
    price: 90,
  },
  {
    Image: [
      {
        url: Museum,
      },
      {
        url: dubaiMuseum1,
      },
      // {
      //   url: DubaiMuseum,
      // },
    ],
    title: "Dubai Museum",
    subtitle: "30 min",

    number: 4.99,
    price: 100,
  },
  {
    Image: [
      {
        url: jabeljas,
      },
      {
        url: jabeljais1,
      },
    ],
    title: "Jabel jais",
    subtitle: "3hr",

    number: 4.96,
    price: 150,
  },
  {
    Image: [
      {
        url: DubaiPark,
      },
      {
        url: Museum,
      },
    ],
    title: "Dubai frame+Museum",
    subtitle: "1hr",

    number: 4.96,
    price: 120,
  },
  {
    Image: [
      {
        url: Museum,
      },
      {
        url: jabeljas,
      },
      // {
      //   url: DubaiMuseum,
      // },
    ],
    title: "All in One tour",
    subtitle: "One week",

    number: 4.99,
    price: 749,
  },
];

function Tourpackages(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to="/book-your-tour">
        <Card>
          <CardActionArea>
            <Slider {...props.settings}>
              {props.el.Image.map((elm, idx) => (
                <CardMedia
                  component="img"
                  height="400"
                  sx={{
                    maxWidth: "100%",
                  }}
                  image={elm.url}
                  alt="Burj khalifa"
                />
              ))}
            </Slider>
          </CardActionArea>
        </Card>
      </Link>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginY={3}
      >
        <Stack>
          <Typography variant="h5">{props.el.title}</Typography>
          <Typography variant="body">
            {props.el.subtitle} Guided trip
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {" "}
            <StarIcon
              sx={{
                fontSize: 20,
              }}
            />
            <Typography variant="h5">{props.el.number}</Typography>
          </Stack>

          <Typography variant="body1">{props.el.price}AED/person</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}

const TourPackage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container sx={{ marginY: 5 }}>
      <Typography variant="h3">Tour Packages</Typography>
      <Grid container spacing={7} marginY={2}>
        {TourList.map((el, idx) => {
          return <Tourpackages settings={settings} el={el}></Tourpackages>;
        })}
      </Grid>
    </Container>
  );
};

export default TourPackage;
