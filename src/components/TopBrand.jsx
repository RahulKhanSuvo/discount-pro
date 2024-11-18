import Marquee from "react-fast-marquee";
import { Link, Navigate, useNavigation } from "react-router-dom";

const TopBrand = ({ data: brands }) => {
  return (
    <section className="mt-4">
      <h3 className="text-lg font-bold mb-4">Top Brands</h3>
      <div>
        <Marquee
          pauseOnHover={true}
          speed={80}
          gradient={false}
          className="bg-[#f6f5f7] rounded-sm p-2"
        >
          {brands.map((brand) => (
            <div key={brand.id} className=" py-2 px-5 cursor-pointer">
              <Link to={`/brands`}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-24 h-10 object-cover  transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TopBrand;
