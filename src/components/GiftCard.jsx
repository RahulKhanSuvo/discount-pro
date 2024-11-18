const GiftCard = ({ gift }) => {
  const { brand, cashBack, buttonText, logoImg, backgroundImg } = gift;
  return (
    <div className="text-white">
      <div className="relative">
        <img className="rounded-lg" src={backgroundImg} alt="" />
        <div className="bottom-1 size-11 left-1 flex justify-center items-center  absolute bg-white rounded-full">
          <img className="size-8 " src={logoImg} alt="" />
        </div>
        <button className="absolute rounded-badge font-medium bg-white px-4 right-4 -bottom-4 py-1 text-[#8529CD]">
          {buttonText}
        </button>
      </div>
      <div>
        <h3>{brand}</h3>
        <p>{cashBack}</p>
      </div>
    </div>
  );
};

export default GiftCard;
