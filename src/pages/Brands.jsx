import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import { useState } from "react";

const Brands = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = data.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="">
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
          filteredBrands.map((brand) => (
            <BrandCard brand={brand} key={brand._id}></BrandCard>
          ))
        ) : (
          <p className="text-center text-white">No brands found.</p>
        )}
      </div>
    </section>
  );
};

export default Brands;
