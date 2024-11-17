import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";
import BrandsOnSale from "./BrandsOnSale";

const Home = () => {
  const { topBrands, brands } = useLoaderData();
  console.log(topBrands);
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <TopBrand data={topBrands}></TopBrand>
      <BrandsOnSale data={brands}></BrandsOnSale>
    </div>
  );
};

export default Home;
