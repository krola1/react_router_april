import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutPage /> },
]);
