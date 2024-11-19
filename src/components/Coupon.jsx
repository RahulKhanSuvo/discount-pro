import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const Coupon = ({ coupon, shopLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopySuccess = () => {
    toast("code copied");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleUseNow = () => {
    window.open(shopLink, "_blank");
  };

  return (
    <div
      style={{
        boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
      }}
      className="flex flex-col bg-white   p-6"
    >
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-[#8529CD]">
          {coupon.coupon_code}
        </h2>
        <p className="text-gray-600 mt-2">{coupon.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            Expires on:{" "}
            <span className="font-medium text-gray-700">
              {coupon.expiry_date}
            </span>
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
            {coupon.coupon_type}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Condition:{" "}
            <span className="font-medium text-gray-800">
              {coupon.condition}
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopySuccess}>
          <button className="px-4 py-2 bg-[#8529CD] text-white font-semibold text-sm rounded-sm shadow-md hover:bg-[#6A1D9A] hover:scale-105 transition-all">
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </CopyToClipboard>

        <button
          onClick={handleUseNow}
          className="px-4 py-2 bg-green-500 text-white font-semibold text-sm rounded-sm shadow-md hover:bg-green-400 hover:scale-105 transition-all"
        >
          Use Now
        </button>
      </div>
    </div>
  );
};

export default Coupon;
