import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import Navbar from "./components/Navbar";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);
