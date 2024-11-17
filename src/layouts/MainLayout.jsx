import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
