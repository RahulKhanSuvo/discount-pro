import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Brands from "../pages/Brands";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CouponPage from "../pages/CouponPage";
import PrivateRoute from "../Private/PrivateRoute";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../components/ErrorPage";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <ProfilePage></ProfilePage>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <CouponPage></CouponPage>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/coupons.json");
          const data = await res.json();
          const singleData = data.find((d) => d._id == params.id);
          return singleData;
        },
      },
    ],
  },
]);
export default router;
