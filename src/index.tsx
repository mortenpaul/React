import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
