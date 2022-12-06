import React from "react";

import "./App.css";
import { useTheme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import ThemeProvider from "./theme";

import { Routes, Route } from "react-router-dom";
import Router from "./routes";
import Home from "./Pages/Main/Home";
import Login from "./Sections/Auth/Login";
import LoginPage from "./Pages/Auth/LoginPage";
import VerifyPage from "./Pages/Auth/VerifyPage";
import SearchCabs from "./Pages/Main/SearchCabs";
import BookCabs from "./Pages/Main/BookCabs";
import Tour from "./Pages/Main/Tour";
import YourCars from "./Pages/Main/YourCars";
import BookTourspack from "./Pages/Main/BookTourspack";
import TermsUse from "./Pages/Main/TermsUse";
import Queries from "./Pages/Main/Queries";
import AboutUs from "./Pages/Main/AboutUs";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { snackbarActions } from "./reducers/snackbarSlice";

const vertical = "top";
const horizontal = "center";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function App() {
  const theme = useTheme();
  console.log(theme);
  const dispatch = useDispatch();

  const { message, open, severity } = useSelector((state) => state.snackbar);

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<VerifyPage />} />
          <Route path="/search-cabs" element={<SearchCabs />} />
          <Route path="/book-cabs" element={<BookCabs />} />
          <Route path="/tour-package" element={<Tour />} />
          <Route path="/your-car" element={<YourCars />} />
          <Route path="/book-your-tour" element={<BookTourspack />} />
          <Route path="/terms-condition" element={<TermsUse />} />
          <Route path="/help-safety" element={<Queries />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </ThemeProvider>

      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            console.log("This is clicked");
            dispatch(snackbarActions.closeSnackBar());
          }}
        >
          <Alert
            onClose={() => {
              console.log("This is clicked");
              dispatch(snackbarActions.closeSnackBar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
