import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../src/App.css";
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
