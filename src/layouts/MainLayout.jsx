import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop ";

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      {user && (
        <div className="flex justify-center bg-[#8529CD] items-center">
          <h2 className="md:text-2xl text-white font-semibold text-center">
            Welcome back, {user.displayName || user.email}!
          </h2>
        </div>
      )}
      <Header />
      <div
        className=""
        style={{
          minHeight: "calc(100vh - 197px)",
        }}
      >
        <ScrollToTop></ScrollToTop>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
