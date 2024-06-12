import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import HomePage from "./pages/homepage";

const theme = {
  primary: "rgba(215, 207, 223, 255)",
  secondary: "",
  tertiary: "",
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
