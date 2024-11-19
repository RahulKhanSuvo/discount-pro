import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const filteredBrands = data.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#F8F8F8] no-overflow pb-10">
      <div className="bg-[#8529CD] py-4">
        <h2 className="text-center text-2xl font-bold mb-4 text-white">
          Find Your Favorite Brands
        </h2>
        <div className="flex mx-2 lg:container lg:mx-auto justify-center">
          <div className="relative w-full md:w-2/4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-10 w-full border border-[#8529CD] bg-[#5D1982] rounded-full text-white placeholder-white"
              placeholder="Search Brands..."
            />
          </div>
        </div>
      </div>
      <div className="lg:container mx-3 lg:mx-auto mt-6 flex flex-col gap-6">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, index) => (
            <div
              key={brand._id}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
              data-aos-offset="100"
              data-aos-easing="ease-in-out"
            >
              <BrandCard brand={brand} />
            </div>
          ))
        ) : (
          <p className="text-center text-white">No brands found.</p>
        )}
      </div>
    </section>
  );
};

export default Brands;
