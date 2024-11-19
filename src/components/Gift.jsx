import { useEffect, useState } from "react";
import GiftCard from "./GiftCard";

const Gift = () => {
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    fetch("gift.json")
      .then((res) => res.json())
      .then((data) => setGifts(data));
  }, []);
  return (
    <div className="bg-[#242463] mt-10">
      <div className="mx-2 lg:container lg:mx-auto py-20">
        <h3 className="font-medium text-3xl text-white pb-4">
          Explore our holiday gift guide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {gifts.slice(0, 3).map((gift) => (
            <GiftCard gift={gift} key={gift.brand}></GiftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gift;
