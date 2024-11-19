import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaTags, FaUser, FaInfoCircle } from "react-icons/fa";
import AuthContext from "../context/authContext";

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  return (
    <div className="border-b bg-white z-50 sticky top-0 shadow-sm">
      <nav className="flex container mx-auto py-4 justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-[#8529CD]">DISCOUNT PRO</h1>
        </Link>

        {/* Centered Navigation Links with Icons */}
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
              }`
            }
          >
            <FaHome size={20} />
            <span className="text-sm">Home</span>
          </NavLink>

          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
              }`
            }
          >
            <FaTags size={20} />
            <span className="text-sm">Brands</span>
          </NavLink>

          {user && (
            <NavLink
              to="/my-Profile"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
                }`
              }
            >
              <FaUser size={20} />
              <span className="text-sm">My Profile</span>
            </NavLink>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
              }`
            }
          >
            <FaInfoCircle size={20} />
            <span className="text-sm">About Dev</span>
          </NavLink>
        </div>

        {/* Authentication Section */}
        <div className="flex items-center gap-5">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{user.email}</span>
              <button
                onClick={userLogout}
                className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-[#8529CD] hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to={"/login"}
                className="text-lg font-semibold  px-5 py-2 rounded-full text-[#8529CD] hover:underline"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-[#8529CD] hover:underline"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
