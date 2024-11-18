import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";
import BrandsOnSale from "./BrandsOnSale";
import HolidayToy from "./HolidayToy";

const Home = () => {
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
