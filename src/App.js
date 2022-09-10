import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import ThemeProvider from "./theme";
import { Button, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Router from "./routes";
import Home from "./Pages/Main/Home";

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
