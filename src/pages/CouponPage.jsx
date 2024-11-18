import CopyToClipboard from "react-copy-to-clipboard";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

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
    <div className="container mx-auto">
      <div className="min-h-screen flex flex-col items-center border">
        <div className="text-center gap-10 flex items-center lg:text-left">
          <h1 className="text-4xl font-bold">{brand_name}</h1>
          <img
            src={brand_logo}
            alt={brand_name}
            className=" size-20 object-cover border rounded-full mt-4"
          />
          <div className="mt-2 text-xl">{`Rating: ${rating}`}</div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.coupon_code}
              className="card p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-xl font-semibold">{coupon.coupon_code}</div>
              <div className="mt-2 text-gray-600">{coupon.description}</div>
              <div className="mt-4 flex justify-between items-center">
                <CopyToClipboard
                  text={coupon.coupon_code}
                  onCopy={handleCopySuccess}
                >
                  <button className="btn bg-[#8529CD] text-white hover:bg-[#6A1D9A] rounded-">
                    Copy Code
                  </button>
                </CopyToClipboard>

                <button
                  onClick={() => handleUseNow(data.shop_Link)}
                  className="btn bg-[#29A853] text-white hover:bg-[#2C8E47] rounded-full"
                >
                  Use Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CouponPage;
