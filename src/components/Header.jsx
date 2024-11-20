import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaTags, FaUser, FaInfoCircle, FaBars } from "react-icons/fa";
import AuthContext from "../context/authContext";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isBar, setBar] = useState(false);
  const { user, userLogout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex lg:flex-col hover:text-[#8529CD]  items-center  ${
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
          `flex lg:flex-col hover:text-[#8529CD] items-center ${
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
            `flex  hover:text-[#8529CD] lg:flex-col items-center ${
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
          `flex hover:text-[#8529CD]  lg:flex-col items-center ${
            isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
          }`
        }
      >
        <FaInfoCircle size={20} />
        <span className="text-sm">About Dev</span>
      </NavLink>
    </>
  );
  return (
    <div className="border-b bg-white z-50 sticky top-0 shadow-sm">
      <nav className="flex mx-2 lg:container lg:mx-auto py-4 justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-[#8529CD]">DISCOUNT PRO</h1>
        </Link>

        {/* Centered Navigation Links with Icons */}
        <div className="hidden lg:flex gap-8">{links}</div>

        {/* Authentication Section */}
        <div className="hidden md:flex  items-center gap-5">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{user?.email}</span>
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
        <div className="lg:hidden relative">
          <button
            onClick={() => setBar(!isBar)}
            className="text-2xl font-semibold text-[#8529CD]"
          >
            {isBar ? <IoMdClose size={25} /> : <FaBars size={25} />}
          </button>
          {isBar && (
            <div className="absolute right-0 z-50 bg-white w-44 p-6 border border-[#8529CD] flex flex-col gap-3 rounded-lg">
              <div className="md:hidden">
                {user ? (
                  <div className="flex items-center flex-col gap-3">
                    <img
                      src={user?.photoURL}
                      alt="User Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm">{user?.displayName}</span>
                    <button
                      onClick={userLogout}
                      className="text-sm px-2 font-semibold text-white rounded-full bg-[#8529CD] hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Link
                      to={"/login"}
                      className="text-sm font-mono rounded-full text-[#8529CD] hover:underline"
                    >
                      Login
                    </Link>
                    <Link
                      to={"/register"}
                      className="text-sm px-1 font-mono text-white  rounded-full bg-[#8529CD] hover:underline"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {links}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
