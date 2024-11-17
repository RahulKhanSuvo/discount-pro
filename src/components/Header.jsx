import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b">
      <nav className="flex container mx-auto py-4 justify-between items-center">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl text-[#8529CD]">DISCOUNT PRO</h1>
        </Link>
        <div className=" flex gap-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/brands"}>Brands</NavLink>
          <NavLink to={"/myProfile"}>My Profile</NavLink>
          <NavLink to={"/about"}>About Dev</NavLink>
        </div>
        <div>
          <button className="text-lg font-semibold text-[#8529CD] hover:underline">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
