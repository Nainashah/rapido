import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import ThemeProvider from "./theme";
import { Button, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Router from "./routes";
import Home from "./Pages/Main/Home";
import Login from "./Sections/Auth/Login";
import LoginPage from "./Pages/Auth/LoginPage";
import VerifyPage from "./Pages/Auth/VerifyPage";
import SearchCabs from "./Pages/Main/SearchCabs";
import BookCabs from "./Pages/Main/BookCabs";
import Tour from "./Pages/Main/Tour";
import YourCars from "./Pages/Main/YourCars"
import BookTourspack from "./Pages/Main/BookTourspack";

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Verify-otp" element={<VerifyPage />} />
        <Route path="/Search-cabs" element={<SearchCabs />} />
        <Route path="/Book-cabs" element={<BookCabs />} />
        <Route path="/Tour-package" element={<Tour />} />
        <Route path="/Your-car" element={<YourCars />} />
        <Route path="/Book-your-tour" element={<BookTourspack/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
