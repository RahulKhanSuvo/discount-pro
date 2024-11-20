import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaTags, FaUser, FaInfoCircle, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AuthContext from "../context/authContext";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    // Function to close sidebar on scroll
    const handleScroll = () => {
      if (isSidebarOpen) setSidebarOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  const links = (
    <div className="flex lg:items-center flex-col lg:flex-row gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-[#8529CD] ${
            isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
          }`
        }
      >
        <FaHome size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/brands"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-[#8529CD] ${
            isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
          }`
        }
      >
        <FaTags size={20} />
        <span>Brands</span>
      </NavLink>

      {user && (
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-[#8529CD] ${
              isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
            }`
          }
        >
          <FaUser size={20} />
          <span>My Profile</span>
        </NavLink>
      )}

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-[#8529CD] ${
            isActive ? "text-[#8529CD] font-bold" : "text-gray-700"
          }`
        }
      >
        <FaInfoCircle size={20} />
        <span>About Dev</span>
      </NavLink>
    </div>
  );

  return (
    <div className="border-b bg-white z-50 sticky top-0 shadow-sm">
      <nav className="flex mx-2 lg:container lg:mx-auto py-4 justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-[#8529CD]">DISCOUNT PRO</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">{links}</div>

        {/* Authentication Section */}
        <div className="hidden lg:flex items-center gap-5">
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
                to="/login"
                className="text-lg font-semibold px-5 py-2 rounded-full text-[#8529CD] hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg font-semibold text-white px-5 py-2 rounded-full bg-[#8529CD] hover:underline"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation - Sidebar Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl font-semibold text-[#8529CD]"
          >
            <FaBars size={25} />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-[#8529CD]">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700 hover:text-[#8529CD]"
          >
            <IoMdClose size={25} />
          </button>
        </div>

        <div className="p-4">
          {user ? (
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-medium">{user?.email}</span>
              </div>
              <button
                onClick={userLogout}
                className="text-sm px-4 py-2 rounded-full bg-[#8529CD] text-white hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-4 mb-6">
              <Link
                to="/login"
                className="text-sm font-semibold text-[#8529CD] hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold px-4 py-2 rounded-full bg-[#8529CD] text-white hover:underline"
              >
                Register
              </Link>
            </div>
          )}
          {links}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
