import { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
