const BrandsOnSale = ({ data: brands }) => {
  const saleBrands = brands.filter((brand) => brand.isSaleOn);

  return (
    <section className="mt-4">
      <h3 className="text-lg font-bold mb-4">Brands on Sale</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {saleBrands.map((brand) => (
          <div
            key={brand.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-cover mx-auto mb-3"
            />
            <h4 className="text-center font-semibold">{brand.name}</h4>
            <p className="text-center text-sm text-gray-600">
              {brand.category}
            </p>
            <p className="text-center text-sm font-medium mt-2">
              Total Coupons: {brand.coupons.length}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsOnSale;
