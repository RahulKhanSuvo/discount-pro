import toyBanner from "../assets/hidaytoy.jpg";

const HolidayToy = () => {
  return (
    <section className="flex bg-white gap-5 flex-col md:flex-row items-center justify-between mt-6 rounded-sm">
      <div className="flex-1 min-w-[60%]">
        <img
          className="w-full object-cover lg:h-[350px] "
          src={toyBanner}
          alt="Holiday Toy Banner"
        />
      </div>
      <div className="flex-1 min-w-[40%] px-4">
        <h3 className=" md:text-3xl font-semibold">
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
