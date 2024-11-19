import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";
import BrandsOnSale from "./BrandsOnSale";
import HolidayToy from "./HolidayToy";
import Gift from "./Gift";

const Home = () => {
  const { topBrands, brands } = useLoaderData();
  return (
    <div>
      <section className="mx-2 lg:container lg:mx-auto">
        <Slider></Slider>
        <TopBrand data={topBrands}></TopBrand>
        <BrandsOnSale data={brands}></BrandsOnSale>
      </section>
      <Gift></Gift>
      <section className="lg:container lg:mx-auto mx-2">
        <HolidayToy></HolidayToy>
      </section>
    </div>
  );
};

export default Home;
