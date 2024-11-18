import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "../context/authContext";
const MainLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="">
        {user && (
          <div className="flex justify-center bg-[#8529CD] items-center ">
            <h2 className="text-2xl text-white  font-semibold text-center">
              Welcome back, {user.displayName || user.email}!
            </h2>
          </div>
        )}
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayout;
