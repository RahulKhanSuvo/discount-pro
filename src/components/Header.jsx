import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/authContext";

const Header = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="border-b bg-white z-50 sticky top-0 shadow-sm">
      <nav className="flex container mx-auto py-4 justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-[#8529CD]">DISCOUNT PRO</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#8529CD] font-bold underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? "text-[#8529CD] font-bold underline" : ""
            }
          >
            Brands
          </NavLink>
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              isActive ? "text-[#8529CD] font-bold underline" : ""
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#8529CD] font-bold underline" : ""
            }
          >
            About Dev
          </NavLink>
        </div>

        <div>
          <Link
            to={"/login"}
            className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-[#8529CD] hover:underline"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
