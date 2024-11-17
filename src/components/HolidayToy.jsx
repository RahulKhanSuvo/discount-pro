import toyBanner from "../assets/2023-top-toys-child-playing-with-top-toys-barbie-play-house.jpg";

const HolidayToy = () => {
  return (
    <section className="flex items-center justify-between mt-6 border rounded-xl">
      <div className="flex-1 max-w-[60%]">
        <img
          className="w-full object-cover lg:h-[350px] rounded-lg"
          src={toyBanner}
          alt="Holiday Toy Banner"
        />
      </div>
      <div className="flex-1 max-w-[40%] px-4">
        <h3 className="text-3xl font-semibold">
          Shop Amazing Holiday Toy Gifts From Walmart
        </h3>
        <p className="text-gray-700">
          Head to their one-stop shop for everything fun, affordable, and nice
          for your little ones!
        </p>
      </div>
    </section>
  );
};

export default HolidayToy;
