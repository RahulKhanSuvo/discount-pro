import CopyToClipboard from "react-copy-to-clipboard";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import Coupon from "../components/Coupon";
const CouponPage = () => {
  const data = useLoaderData();
  const {
    _id,
    brand_name,
    rating,
    description,
    brand_logo,
    shop_Link,
    isSaleOn,
    coupons,
  } = data;
  const handleCopySuccess = () => {
    toast.success("Coupon code copied to clipboard!");
  };

  const handleUseNow = (link) => {
    window.open(link, "_blank");
  };
  return (
    <section className="max-h-screens">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center border p-10">
          <div className="text-center  p-4 gap-10 flex items-center lg:text-left">
            <h1 className="text-4xl font-bold">{brand_name}</h1>
            <img
              src={brand_logo}
              alt={brand_name}
              className=" h-28 object-cover  mt-4"
            />
            <div className="mt-2 text-xl">
              {`Rating: ${rating}`}
              <ReactStars
                isHalf={true}
                count={5}
                value={rating}
                size={24}
                activeColor="#ffd700"
                edit={true}
              />
            </div>
          </div>

          <div className="grid border-t grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {coupons.map((coupon) => (
              <Coupon
                coupon={coupon}
                shopLink={shop_Link}
                key={coupon.coupon_code}
              ></Coupon>
            ))}
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default CouponPage;
