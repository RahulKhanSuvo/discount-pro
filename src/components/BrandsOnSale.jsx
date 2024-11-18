const BrandsOnSale = ({ data: brands }) => {
  const saleBrands = brands.filter((brand) => brand.isSaleOn);

  return (
    <section className="mt-4">
      <h3 className="text-lg font-bold mb-4">Brands on Sale</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {saleBrands.map((brand) => (
          <div className=" border px-6 rounded-md" key={brand._id}>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full mb-3  h-28 p-4"
                src={brand.brand_logo}
                alt=""
              />
            </div>
            <div className="border-t ">
              <div className="flex justify-between mt-4">
                <h3 className="font-medium">{brand.brand_name}</h3>
                <p className="bg-[#F3F4F6]  px-2 rounded-badge ">
                  {brand.category}
                </p>
              </div>
            </div>
            <p className="text-center mt-4 pb-4">
              Total coupons: {brand.coupons.length}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsOnSale;
