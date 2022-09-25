import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container, height } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import ToyotaCar from "../../assets/images/ToyotaCar.png";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";
import mission from "../../assets/images/mission.png";
import founder from "../../assets/images/founder.png";
import Nainarapido from "../../assets/images/Nainarapido.png";
import Sureshrapido from "../../assets/images/Sureshrapido.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const CardList = [
  {
    icon: <CelebrationIcon />,
    title: "Trust",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: <FavoriteIcon />,
    title: "Loyal",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: <BarChartIcon />,
    title: "Transparent",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const StartList = [
  {
    title: "YEAR",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "YEAR",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "YEAR",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const MissionList = [
  {
    url: mission,
    title: "Orci potenti mi nullam lacus vel platea eget.",
  },

  {
    url: mission,
    title: "Orci potenti mi nullam lacus vel platea eget.",
  },

  {
    url: mission,
    title: "Orci potenti mi nullam lacus vel platea eget.",
  },
];
const TeamList = [
  {
    url: founder,

    title: "Omprakash shah",
    href: "",
    subtitle: "Managing Director",
    para: "InvestorMD @Google - Global Client & Marketing Partnerships Asia Pacific & Japan",
  },
  {
    url: Nainarapido,

    title: "Naina shah",
    href: "",
    subtitle: "Managing Director",
    para: "InvestorMD @Google - Global Client & Marketing Partnerships Asia Pacific & Japan",
  },
  {
    url: Sureshrapido,

    title: "Suresh shah",
    href: "",
    subtitle: "Managing Director",
    para: "InvestorMD @Google - Global Client & Marketing Partnerships Asia Pacific & Japan",
  },
];

const About = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Container>
        <Grid container sx={{ marginY: 7 }}>
          <Grid item sx={12} md={6}>
            <Stack sx={{ marginBottom: 6 }}>
              <Typography variant="h3">
                We are Re-Imagining ride <br /> Experience
              </Typography>
              <Typography variant="body2">
                Experience smooth, hassle free & pocket friendly rides, tours &
                car rental today with <br /> Rapido.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <Button variant="contained">Book a Ride </Button>
            </Stack>
          </Grid>
          <Grid item sx={12} md={6}>
            <img src={ToyotaCar} alt="" />
          </Grid>
        </Grid>
        <Stack alignItems={"center"}>
          <Typography variant="h4">Our Belief</Typography>
          <Typography variant="body2" textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Facilisi leo dignissim orci.
          </Typography>
          <Stack>
            <Card sx={{ marginY: 4 }}>
              <CardContent sx={{ background: "#F5F5F5" }}>
                <Stack sx={{ marginY: 3 }}>
                  <Stack spacing={4}>
                    <Typography
                      variant="body2"
                      sx={{ marginBottom: 4 }}
                      textAlign={"center"}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Interdum blandit proin tortor et id purus. Nibh fusce nunc
                      sem condimentum nunc nulla ornare. Id ac, cras nulla
                      iaculis ac nunc, luctus pharetra enim. Mollis fermentum
                      vel purus ipsum urna. At nunc, mattis odio eget sem in
                      quisque non sed. Donec malesuada elit consequat rutrum
                      morbi sed. Quis est nisl sit leo etiam at est.
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>

        <Stack alignItems={"center"}>
          <Typography variant="h4">Our Values</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Facilisi leo dignissim orci.
          </Typography>
        </Stack>
        <Grid container marginTop={5} spacing={5}>
          {CardList.map((el, idx) => (
            <Grid item xs={12} md={4}>
              <Stack
                direction={"row"}
                spacing={5}
                alignItems="center"
                justifyContent={"center"}
              >
                <Card>
                  <CardContent sx={{ background: "#F5F5F5" }}>
                    <Stack
                      sx={{ alignItems: "center", justifyContent: "center" }}
                      spacing={4}
                    >
                      <Stack>{el.icon}</Stack>
                      <Stack>
                        <Typography variant="h6" textAlign={"center"}>
                          {el.title}
                        </Typography>
                        <Typography variant="body2" textAlign={"center"}>
                          {el.subtitle}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{ background: "#F5F5F5", width: "100%", marginY: 8, padding: 7 }}
      >
        <Container>
          <Stack sx={{ alignItems: "center" }}>
            <Typography variant="h4">How We Started?</Typography>
          </Stack>
          <Grid container marginTop={8}>
            {StartList.map((el, idx) => (
              <Grid item xs={12} md={4}>
                <Stack sx={{ alignItems: "center", paddingX: 5 }} spacing={4}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      background: "#ffff",
                    }}
                  >
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: 40 }}
                    >
                      <Typography variant="h6">{idx + 1}</Typography>
                    </Stack>
                  </Box>

                  <Stack spacing={3}>
                    <Typography variant="h6" textAlign={"center"}>
                      {el.title}
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                      {el.subtitle}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container>
        <Stack marginBottom={5}>
          <Typography variant="h4" textAlign={"center"}>
            Our Mission
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            laoreet <br /> bibendum faucibus proin nam. Ac pharetra ut sodales.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {MissionList.map((el, idx) => (
            <Grid item xs={12} md={4}>
              <Stack alignItems={"center"} sx={{ paddingX: 4 }}>
                {/* <Card sx={{ borderRadius: "10px", padding: 2 }}> */}

                <Stack sx={{ alignItems: "center" }}>
                  <img
                    src={el.url}
                    style={{
                      maxHeight: "20vh",
                      maxWidth: "20vh",
                    }}
                    alt="Project-1"
                  />
                </Stack>

                <Typography variant="body2" textAlign={"center"}>
                  Lorem ipsum dolor sit amet, <r /> consectetur adipiscing elit.
                  A.
                </Typography>

                {/* </Card> */}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{ background: "#F7F7F7", width: "100%", marginY: 8, padding: 7 }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={founder} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h4">From the Founder’s desk</Typography>
                <Typography variant="body2">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  quam et, fusce risus enim ipsum viverra quam. Pellentesque
                  auctor eget adipiscing volutpat, sit diam cras dictumst
                  magnis. Scelerisque dignissim donec vulputate erat augue
                  tortor nibh urna. Tortor viverra pretium et tincidunt
                  vestibulum. Dictum massa ut aenean scelerisque nisl, arcu at
                  mattis. Et at eget et eget a nisi. Convallis malesuada feugiat
                  ridiculus iaculis suspendisse lobortis mauris, pellentesque a.
                  Condimentum suspendisse elit elit orci. Condimentum mauris
                  massa aliquam sed vitae. Ullamcorper cursus nisl congue turpis
                  natoque elementum. Proin vestibulum id tortor mattis
                  imperdiet. Aenean cursuselementum enim. Libero, facilisi ut
                  faucibus netus viverra vitae aliquet. Diam vel, mauris turpis
                  cras vitae.”
                </Typography>

                <Stack direction={"row"}>
                  <Typography variant="h6">Name:</Typography>
                  <Typography variant="h6">Designation</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Stack alignItems={"center"}>
          {" "}
          <Typography variant="h4">Meet the Team</Typography>
          <Typography variant="body2" textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Senectus dolor ipsum proin.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {TeamList.map((el, idx) => (
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: "10px", padding: 2 }}>
                <CardContent>
                  <Stack direction={"row"} spacing={4}>
                    <img
                      src={el.url}
                      style={{
                        maxHeight: "10vh",
                        maxWidth: "10vh",
                      }}
                      alt="team"
                    />
                    <LinkedInIcon />
                    <TwitterIcon />
                  </Stack>
                  <Stack>
                    <Typography variant="h6">{el.title}</Typography>
                    <Typography variant="body2">{el.subtitle}</Typography>
                    <Typography variant="body2" sx={{ marginTop: 4 }}>
                      {el.para}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ marginY: 8 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Stack>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Collapsible Group Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography variant="h4" textAlign={"center"}>
                Any Questions
              </Typography>

              <Typography variant="body2" textAlign={"center"}>
                We have already curated some of the common asked questions for
                you
              </Typography>
              <Stack alignItems={"center"}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    marginTop: 4,
                    width: "max-content",
                  }}
                  startIcon={<LocalPhoneOutlinedIcon />}
                >
                  {" "}
                  Schedule a call today
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
