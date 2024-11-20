import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const {
    _id,
    brand_name,
    rating,
    description,
    brand_logo,
    shop_Link,
    isSaleOn,
  } = brand;

  return (
    <div
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="flex flex-col bg-white md:flex-row relative justify-between items-center rounded-sm p-6 transition-transform transform"
    >
      {/* Brand Logo Section */}
      <div className="border rounded-lg overflow-hidden w-full md:w-fit shadow-sm">
        <img
          className="w-full md:w-32 h-20 object-contain p-3 border-b"
          src={brand_logo}
          alt={`${brand_name} Logo`}
        />
        <div className="p-3">
          <h3 className="text-lg text-center font-semibold text-gray-800">
            {brand_name}
          </h3>
          {/* Rating Section */}
          <div className="flex items-center justify-center space-x-2 mt-2">
            <p className="text-gray-600 text-sm font-medium">{rating}</p>
            <ReactStars
              isHalf={true}
              count={5}
              value={rating}
              size={20}
              activeColor="#ffd700"
              edit={false}
              aria-label="Brand rating"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="md:w-80 mt-4 md:mt-0 md:ml-6">
        <h3 className="font-semibold text-gray-800">{brand_name}</h3>
        <p className="text-sm text-gray-600">{description.slice(0, 100)}...</p>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <Link
          to={`/brands/${_id}`}
          className="rounded-sm py-2 px-4 text-white bg-[#FFA619] font-bold text-lg shadow-md hover:bg-[#ff8c00] transition-colors"
          aria-label={`View coupons for ${brand_name}`}
        >
          View Coupons
        </Link>
      </div>

      {/* Sale Notification */}
      {isSaleOn && (
        <div
          className="absolute top-2 right-3 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-bounce shadow-md"
          aria-label="Sale is On!"
        >
          Sale is On!
        </div>
      )}
    </div>
  );
};

export default BrandCard;
