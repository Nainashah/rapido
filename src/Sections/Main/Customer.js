import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';


const ReasonList = [
    {
      icon: <SupportAgentIcon sx={{fontSize:40}}/>,
      title: "24*7 Customer Support",
      subtitle:
        "A dedicated 24x7 customer support team always at your service to help solve any problem",
    },
    {
      icon: <SafetyCheckIcon sx={{fontSize:40}} />,
      title: "Your Safety First",
      subtitle:
        "Keep your loved ones informed about your travel routes or call emergency services when in need",
    },
    {
      icon: < SafetyDividerIcon  sx={{fontSize:40}} />,
      title: "Top Rated Drivers",
      subtitle:
        "All our driver-partners are background verified and trained to deliver only the best experience ",
    },
   
  ];
const Customer = () => {
  return (
    <Container>
   
    <Grid container spacing={4} >
      {ReasonList.map((el, idx) => (
        <Grid item sm={12} md={4}>
          <Card sx={{ height: "100%", width: "100%", borderRadius: "8px", padding:2,background:("#eeeeee ")  }}>
            <Stack direction={"row"} spacing={3} justifyContent={"center"} alignItems={"center"}>
              
              {el.icon}
   
              

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
  )
}

export default Customer