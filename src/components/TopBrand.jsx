import Marquee from "react-fast-marquee";
import { Link, Navigate, useNavigation } from "react-router-dom";

const TopBrand = ({ data: brands }) => {
  return (
    <section className="mt-4">
      <h3>Top Brands</h3>
      <div>
        <Marquee
          pauseOnHover={true}
          speed={60}
          gradient={false}
          className="bg-gray-100 rounded-lg p-2"
        >
          {brands.map((brand) => (
            <div key={brand.id} className="mx-5 cursor-pointer">
              <Link to={"/brands"}>
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
