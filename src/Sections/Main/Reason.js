import React from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import useResponsive from "../../hooks/useResponsive";
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const ReasonList = [
  {
    icon: <SavingsIcon sx={{ fontSize: 50 }} />,
    title: "Pocket Friendly Rides",
    subtitle:
      "Rapido offers cabs ranging from sedans, SUVs to Luxury cars for special occasions. We have rides to suit your needs.",
  },
  {
    icon: <OndemandVideoIcon sx={{ fontSize: 50 }} />,
    title: "In Cab Entertainment",
    subtitle:
      "Play music, watch videos and a lot more with Rapido Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.",
  },
  {
    icon: <SafetyCheckIcon sx={{ fontSize: 50 }} />,
    title: "Secure & Safer Rides",
    subtitle:
      "Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience. ",
  },
  {
    icon: <LocalAtmIcon sx={{ fontSize: 50 }} />,
    title: "Cashless Rides",
    subtitle:
      "Now go cashless and travel easy. Simply recharge your Rapido money or add your credit/debit card to enjoy hassle free payments",
  },
];
const Reason = () => {
  const isMobile = useResponsive("between", "sm", "xs", "sm");
  return (
    <Container>
      <Stack py={8}>
        <Typography variant={"h4"}>Why Ride Rapido</Typography>
        <Typography variant={"body"}>
          Best way to reach your destination
        </Typography>
      </Stack>
      <Grid container spacing={3} >
        {ReasonList.map((el, idx) => (
          <Grid item sm={12} md={6}>
            <Card
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "8px",
                padding: 8,
                background: alpha("#8ea6ad", 0.1),
              }}
            >
              {isMobile &&   <Stack alignItems={"center"} justifyContent={"center"} marginBottom={2}>
              <Box
                    sx={{
                      borderRadius: "58px",
                      height: "82px",
                      padding: 2,
                      
                      backgroundColor: "#FFF",
                    }}
                  >
                    {el.icon}
                  </Box>
              </Stack> }
            
              
              <Stack direction={"row"} spacing={3} justifyContent={"center"}>
                { !isMobile && (
                  <Box
                    sx={{
                      borderRadius: "58px",
                      height: "fit-content",
                      padding: 2,
                      width: "100px",
                      backgroundColor: "#FFF",
                    }}
                  >
                    {el.icon}
                  </Box>
                )}

                <Stack>
                  <Typography variant={"h6"}>{el.title}</Typography>{" "}
                  <Typography variant={"body2"}>{el.subtitle}</Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reason;
