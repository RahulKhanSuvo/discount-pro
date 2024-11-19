import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import Coupon from "../components/Coupon";
const CouponPage = () => {
  const data = useLoaderData();
  const {
    brand_name,
    rating,
    description,
    brand_logo,
    shop_Link,
    coupons,
    category,
    isSaleOn,
  } = data;

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
            <img
              src={brand_logo}
              alt={brand_name}
              className="h-28 object-contain w-56 mt-4"
            />
            <div className="space-y-3">
              <div className="mt-2 text-[#CA8A04] flex gap-2 text-xl">
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
              <h1 className="text-4xl font-bold">{brand_name}</h1>
              <p className="text-sm text-gray-600">Category: {category}</p>
            </div>
          </div>
          <div
            style={{
              boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
            }}
            className="bg-white border-dashed border-t p-5 "
          >
            <p className="text-gray-500">{description}</p>
          </div>
          <div>
            <div className="">
              {isSaleOn ? (
                <div
                  style={{
                    boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
                  }}
                  className="p-4 bg-green-100 text-green-800 rounded-sm flex items-center gap-3"
                >
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
            <h2 className="text-2xl font-semibold mt-3 text-center text-gray-900">
              Available Coupons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
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
