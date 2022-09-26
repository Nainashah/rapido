import { Box, Stack } from "@mui/material";

const Circle = ({ children }) => {
  return (
    <Box
      sx={{
        borderRadius: "58px",
        height: "82px",
        padding: 2,
        minWidth: "82px",
        backgroundColor: "#FFF",
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default Circle;
