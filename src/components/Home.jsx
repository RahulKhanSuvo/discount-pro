import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TopBrand from "./TopBrand";
import BrandsOnSale from "./BrandsOnSale";
import HolidayToy from "./HolidayToy";
import Gift from "./Gift";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    window.addEventListener("load", () => {
      AOS.refresh();
    });
    return () => {
      window.removeEventListener("load", () => {
        AOS.refresh();
      });
    };
  }, []);
  const { topBrands, brands } = useLoaderData();
  return (
    <div className="bg-[#F8F8F8] no-overflow pb-10">
      <section className="mx-2 lg:container lg:mx-auto">
        <Slider></Slider>
        <div className="animate__animated animate__fadeInLeft">
          <TopBrand data={topBrands}></TopBrand>
        </div>
        <BrandsOnSale data={brands}></BrandsOnSale>
      </section>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Gift></Gift>
      </div>

      <section data-aos="fade-left" className="lg:container lg:mx-auto mx-2">
        <HolidayToy></HolidayToy>
      </section>
    </div>
  );
};

export default Home;
