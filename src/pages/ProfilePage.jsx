import { useContext } from "react";
import AuthContext from "../context/authContext";
import { Link } from "react-router-dom";
import bg from "../assets/cool-background.svg";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="min-h-[calc(100vh-197px)] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className=" w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Your Profile
        </h1>
        <p className="text-lg text-white mt-2">
          Hello, {user?.displayName || "User"}!
        </p>
      </div>

      <div className="relative z-10 card w-full max-w-sm bg-white rounded-sm shadow-sm p-6">
        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt={user?.displayName || "User Photo"}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            {user?.displayName || "No Name Provided"}
          </h2>
          <p className="text-gray-700">{user?.email || "No Email Provided"}</p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Link
            to={"/my-profile/update"}
            className="btn bg-[#8529CD] text-white rounded-sm hover:bg-[#6A1D9A]"
          >
            Update Profile
          </Link>
          <Link
            to={"/forget-password"}
            className="btn bg-[#4ADE80] text-white rounded-sm hover:bg-[#31ff7d]"
          >
            Forget password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
