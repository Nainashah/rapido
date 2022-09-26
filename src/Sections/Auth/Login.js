import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
   
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box width={"400px"}>
          <Stack
            sx={{ alignItems: "center", justifyContent: "center", marginY: 8, marginX: 3 }}
            spacing={3}
          >
            <Typography variant={"h3"}>Login</Typography>
            <Typography variant={"body2"}>
              Please enter your registered mobile number
            </Typography>

            <TextField
              id="filled-textarea"
              fullWidth
              placeholder="+971 Mobile Number"
              multiline
              variant="outlined"
            />
            <Button variant="contained" fullWidth href="/Verify-otp">
              Login
            </Button>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography variant="body">Don't have an account?</Typography>{" "}
              <Typography variant="body" component={Link} to="/Search-cabs" style={{textDecoration:"none"}}>Book a Rapido</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
   
  );
};

export default Login;
