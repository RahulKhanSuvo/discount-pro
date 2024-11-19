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
    <div
      style={{
        boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
      }}
      className="flex flex-col bg-white md:flex-row  relative justify-between  items-center rounded-sm p-6 "
    >
      <div className="border rounded-sm">
        <img
          className="w-56 object-fill md:w-32 h-14 p-3 border-b "
          src={brand_logo}
          alt={brand_name}
        />
        <div className="p-3">
          <h3 className="text-lg text-center border-b font-semibold">
            {brand_name}
          </h3>

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
      <div className="">
        <h3 className="font-semibold pt-3 md:p-0">{brand_name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* View Coupons Button */}
      <div className="flex flex-col items-center">
        <Link
          to={`/brand/${_id}`}
          className="rounded-sm py-2 text-white  bg-[#FFA619] font-bold text-lg btn shadow-sm px-3"
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
