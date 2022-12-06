import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginWithMobile } from "../../reducers/authSlice";
import { snackbarActions } from "../../reducers/snackbarSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [mobile, setMobile] = useState("");

  const [error, setError] = useState("");

  const mobileRef = useRef("");

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  useEffect(() => {
    mobileRef.current.focus();
  }, []);

  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Box width={"400px"}>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginY: 8,
            marginX: 3,
          }}
          spacing={3}
        >
          <Typography variant={"h3"}>Login</Typography>
          <Typography variant={"body2"}>
            Please enter your registered mobile number
          </Typography>

          <TextField
            inputRef={mobileRef}
            id="filled-textarea"
            fullWidth
            placeholder="+971 Mobile Number"
            multiline
            variant="outlined"
            error={error}
            helperText={error}
            value={mobile}
            // onChange={handleMobileChange}
            onChange={(e) => {
              handleMobileChange(e);
            }}
          />
          <Button
            onClick={() => {
              dispatch(LoginWithMobile({ mobile }));
            }}
            variant="contained"
            fullWidth
          >
            Login
          </Button>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography variant="body">Don't have an account?</Typography>{" "}
            <Typography
              variant="body"
              component={Link}
              to="/Search-cabs"
              style={{ textDecoration: "none" }}
            >
              Book a Rapido
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
