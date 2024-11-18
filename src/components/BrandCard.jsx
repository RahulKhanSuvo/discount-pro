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
    <div className="flex relative justify-between shadow-md  items-center  rounded-3xl p-6">
      <div className="border rounded-lg">
        <img
          className=" w-32 p-3 border-b rounded-t-lg"
          src={brand_logo}
          alt={brand_name}
        />
        <div className="ml-3 ">
          <h3 className="text-lg border-b font-semibold">{brand_name}</h3>
          <ReactStars
            isHalf={true}
            count={5}
            value={rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>

      <div>
        <h3>{brand_name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="flex flex-col items-center">
        <Link
          to={`/brands/${_id}`}
          className="rounded-full py-2 drop-shadow-md text-[#8529CD] font-bold text-lg btn shadow-sm px-3"
        >
          View Coupons
        </Link>
      </div>
      {isSaleOn && (
        <div className="text-red-500 right-3 top-2 absolute font-bold text-center animate-bounce">
          <span className="bouncing-text">Sale is On!</span>
        </div>
      )}
    </div>
  );
};

export default BrandCard;
