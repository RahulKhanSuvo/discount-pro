import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const BrandsOnSale = ({ data: brands }) => {
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

  const saleBrands = brands.filter((brand) => brand.isSaleOn);

  return (
    <section className="mt-8 ">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Brands on Sale</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleBrands.map((brand) => (
          <div
            data-aos="fade-up"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            className="bg-white rounded-sm p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            key={brand._id}
          >
            {/* Logo Section */}
            <div className="flex justify-center items-center mb-4">
              <img
                className="h-24 w-24 object-contain"
                src={brand.brand_logo}
                alt={`${brand.brand_name} Logo`}
              />
            </div>

            {/* Brand Name & Category */}
            <div className="w-full border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.brand_name}
                </h3>
                <p className="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                  {brand.category}
                </p>
              </div>
            </div>

            {/* Coupon Information */}
            <p className="text-center text-gray-600 mt-4">
              <span className="font-medium text-gray-800">
                {brand.coupons.length}
              </span>{" "}
              Total Coupons Available
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsOnSale;
