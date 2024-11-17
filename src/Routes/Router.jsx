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
        loader: async () => {
          const topBrandsResponse = await fetch("topBrand.json");
          const topBrands = await topBrandsResponse.json();
          const brandsOnSaleResponse = await fetch("coupons.json");
          const brands = await brandsOnSaleResponse.json();

          return { topBrands, brands };
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("coupons.json"),
      },
    ],
  },
  {
    path: "*",
    element: <p>error</p>,
  },
]);
export default router;
