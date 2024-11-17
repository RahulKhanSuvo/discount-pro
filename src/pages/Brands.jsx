import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
const Brands = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="">
      <div className="bg-[#8529CD] py-4">
        <h2 className="text-center text-2xl font-bold mb-4 text-white">
          Find Your Favorite Brands
        </h2>
        <div className="flex container mx-auto justify-center">
          <div className="relative w-full md:w-2/4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              className="p-2 pl-10 w-full border border-[#8529CD] bg-[#5D1982] rounded-full text-white placeholder-white"
              placeholder="Search Brands..."
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-6">
        {data.map((brand) => (
          <BrandCard brand={brand} key={brand._id}></BrandCard>
        ))}
      </div>
    </section>
  );
};

export default Brands;
