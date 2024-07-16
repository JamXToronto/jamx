import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import HomePage from "./pages/homepage";

const theme = {
  primary: "black",
  secondary: "rgba(215, 207, 223, 255)",
  tertiary: "",
  primaryGradient: "rgb(78, 193, 185)",
  secondaryGradient: "rgb(30,255, 228)",
  tertiaryGradient: "rgb(158, 253, 173)",
  gradient: `linear-gradient(
    to right,
    rgb(78, 193, 185),
    rgb(30,255, 228),
    rgb(158, 253, 173)
  );`,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <HomePage />
          <Footer></Footer>
        </React.Fragment>
      </ThemeProvider>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
