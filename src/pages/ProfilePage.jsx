import { useContext } from "react";
import AuthContext from "../context/authContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[calc(100vh-197px)] flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Your Profile
        </h1>
        <p className="text-lg text-white mt-2">
          Hello, {user?.displayName || "User"}!
        </p>
      </div>

      <div className="card w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
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
          <button className="btn bg-[#8529CD] text-white rounded-full hover:bg-[#6A1D9A]">
            Update Profile
          </button>
          <button className="btn bg-[#29A853] text-white rounded-full hover:bg-[#2C8E47]">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
