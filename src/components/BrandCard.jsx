import { FaStar } from "react-icons/fa"; // For the star icon
import ReactStars from "react-rating-stars-component";
const BrandCard = ({ brand }) => {
  const {
    brand_name,
    rating,
    description,
    brand_logo,
    shop_Link,
    isSaleOn,
    coupons,
  } = brand;

  return (
    <div className="flex justify-between shadow-xl items-center border rounded-3xl p-6">
      <div>
        <img
          className="w-40 h-10 object-cover rounded-3xl"
          src={brand_logo}
          alt=""
        />
        <h3>{brand_name}</h3>
        <ReactStars
          half={true}
          count={5}
          value={rating}
          size={24}
          r
          activeColor="#ffd700"
          edit={true}
        />
      </div>
      <div>
        <p>{brand_name}</p>
        <p>{description}</p>
      </div>
      <div>
        <button>View Coupon</button>
      </div>
    </div>
  );
};

export default BrandCard;
