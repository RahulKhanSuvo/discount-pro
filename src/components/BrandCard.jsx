import { FaStar } from "react-icons/fa"; // For the star icon
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
    coupons,
  } = brand;

  return (
    <div className="flex relative justify-between shadow-lg items-center rounded-3xl p-6">
      {/* Brand Logo and Rating Section */}
      <div className="border rounded-lg">
        <img
          className="w-32 p-3 border-b rounded-t-lg"
          src={brand_logo}
          alt={brand_name}
        />
        <div className="p-3">
          <h3 className="text-lg border-b font-semibold">{brand_name}</h3>

          {/* Rating Section */}
          <div className="flex items-center justify-center space-x-2 mt-2">
            <p className="text-gray-700 text-sm font-medium">{rating}</p>
            <ReactStars
              isHalf={true}
              count={5}
              value={rating}
              size={20}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div>
        <h3>{brand_name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* View Coupons Button */}
      <div className="flex flex-col items-center">
        <Link
          to={`/brands/${_id}`}
          className="rounded-full py-2 drop-shadow-md text-[#8529CD] font-bold text-lg btn shadow-sm px-3"
        >
          View Coupons
        </Link>
      </div>

      {/* Sale Notification */}
      {isSaleOn && (
        <div className="absolute top-2 right-3 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold animate-bounce">
          <span className="bouncing-text">Sale is On!</span>
        </div>
      )}
    </div>
  );
};

export default BrandCard;
