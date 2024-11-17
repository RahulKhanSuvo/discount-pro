import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <TopBrand data={data}></TopBrand>
    </div>
  );
};

export default Home;
