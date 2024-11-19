import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-center p-8">
        <p className="text-lg font-semibold text-gray-700">
          Brand details could not be loaded. Please try again later.
        </p>
      </div>
    );
  }

  const {
    brand_name,
    rating,
    description,
    brand_logo,
    shop_Link,
    category,
    isSaleOn,
    coupons,
  } = data;

  return (
    <section className="bg-[#F8F8F8]">
      <div className="container min-h-[calc(100vh-197px)]  mx-auto px-6 py-12">
        <div
          style={{
            boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
          }}
          className="bg-white p-6"
        >
          {/* Brand Header Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
            <img
              src={brand_logo}
              alt={`${brand_name} logo`}
              className="w-24 bg-white h-24 sm:w-32 sm:h-32 object-contain rounded-sm border-2 border-gray-300 shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{brand_name}</h1>
              <p className="text-sm text-gray-600">Category: {category}</p>
              <p className="text-lg font-semibold text-yellow-600">
                Rating: {rating} ⭐
              </p>
            </div>
          </div>

          {/* Brand Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-800 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Shop Link Button */}
          <div className="mb-8">
            <a
              href={shop_Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-fit px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-sm hover:bg-blue-700 transition duration-300"
            >
              Visit {brand_name} Shop
            </a>
          </div>

          {/* Sale Info */}
          <div className="mt-12">
            {isSaleOn ? (
              <div className="p-4 bg-green-100 text-green-800 rounded-sm flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <p className="text-xl font-semibold">
                  Hurry! There's a Sale Going On!
                </p>
              </div>
            ) : (
              <div className="p-4 bg-red-100">
                <p className="text-gray-600 text-xl">
                  ❌ No active sale right now.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDetails;
