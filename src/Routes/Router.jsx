import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Brands from "../pages/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("topBrand.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
    ],
  },
  {
    path: "*",
    element: <p>error</p>,
  },
]);
export default router;
