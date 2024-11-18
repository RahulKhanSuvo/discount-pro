import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Brands from "../pages/Brands";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CouponPage from "../pages/CouponPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const topBrandsResponse = await fetch("/topBrand.json");
          const topBrands = await topBrandsResponse.json();
          const brandsOnSaleResponse = await fetch("/coupons.json");
          const brands = await brandsOnSaleResponse.json();

          return { topBrands, brands };
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/coupons.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/brands/:id",
    element: <CouponPage></CouponPage>,
    loader: async ({ params }) => {
      const res = await fetch("/coupons.json");
      const data = await res.json();
      const singleData = data.find((d) => d._id == params.id);
      return singleData;
    },
  },
  {
    path: "*",
    element: <p>error</p>,
  },
]);
export default router;
