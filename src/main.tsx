import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.tsx";
import Infocus from "./pages/Infocus.tsx";
import Models from "./pages/Models.tsx";  
import GRWMRR from "./pages/GRWMRR.tsx";
import Contact from "./pages/Contact.tsx";
import "./styles.css";
import Mainboard from "./pages/mainboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "mainboard", element: <Mainboard /> },
      { path: "infocus", element: <Infocus />},
      { path: "models", element: <Models /> },
      { path: "grwmrr", element: <GRWMRR /> },
      { path: "contact", element: <Contact /> }
      
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
