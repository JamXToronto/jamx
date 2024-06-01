import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <HomePage />
        <Footer></Footer>
      </React.Fragment>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
