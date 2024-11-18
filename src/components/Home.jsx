import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";
import BrandsOnSale from "./BrandsOnSale";
import HolidayToy from "./HolidayToy";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const Home = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user
  const { topBrands, brands } = useLoaderData();
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <TopBrand data={topBrands}></TopBrand>
      <BrandsOnSale data={brands}></BrandsOnSale>
      <HolidayToy></HolidayToy>
    </div>
  );
};

export default Home;
