import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import Coupon from "../components/Coupon";
const CouponPage = () => {
  const data = useLoaderData();
  const { brand_name, rating, description, brand_logo, shop_Link, coupons } =
    data;

  return (
    <section className="bg-[#F8F8F8] pb-10">
      <div className="lg:container mx-3 lg:mx-auto">
        <div className="">
          <div
            style={{
              boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
            }}
            className="text-center  p-4 gap-10 flex bg-white flex-col md:flex-row items-center justify-center lg:text-left"
          >
            <h1 className="text-4xl font-bold">{brand_name}</h1>
            <img src={brand_logo} alt={brand_name} className="h-28 w-56 mt-4" />
            <div className="mt-2 text-xl">
              <p>{`Rating: ${rating}`}</p>
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

          <h3 className=""> Description: {description}</h3>
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
