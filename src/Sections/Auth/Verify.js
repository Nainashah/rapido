import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { width } from "@mui/system";
const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);
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
          <Typography variant={"h3"}>Verify OTP</Typography>
          <Stack justifyContent={"start"} width={"100%"}>
            <Typography variant={"body2"}>
              Please enter OTP sent to your mobile number:
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ marginY: 1 }}
            >
              <Typography variant="subtitle1">+971768789823</Typography>
              <IconButton>
                <CreateIcon />
              </IconButton>
            </Stack>
            <Stack sx={{width:"100%" , alignItems:"center", justifyContent:"center"}}>
              {" "}
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span>{"  "}</span>}
                inputStyle={{
                  margin: 20,
                  width: 48,
                  height: 48,
                  borderRadius:10
                }}
              />
            </Stack>
          </Stack>

          <Button variant="contained" fullWidth>
            Verify
          </Button>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography variant="body">Don't Received OTP?</Typography>{" "}
            <Typography variant="body">Resend</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Verify;
