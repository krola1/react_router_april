import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/products",
        element: <ProductPage />,
        children: [{ path: "/products/:id/", element: <ProductDetailsPage /> }],
      },
    ],
  },

  { path: "*", element: <h1>404 not found</h1> },
]);
