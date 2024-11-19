import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";

const ForgetPassword = () => {
  const { userPasswordReset, userLogout } = useContext(AuthContext);

  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [error, setError] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    userPasswordReset(email)
      .then(() => {
        userLogout();
        window.location.href = "https://mail.google.com/";
      })
      .catch((er) => {
        setError(er.message);
      });
  };
  return (
    <div className="min-h-[calc(100vh-197px)] flex items-center justify-center">
      <div className="card p-6 bg-base-100 w-full mt-6 max-w-lg shrink-0 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6">Forgot Password</h1>
        <form onSubmit={handleResetPassword}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white rounded-full bg-[#8529CD] hover:bg-[#6A1D9A] hover:scale-105 transition-all">
              Reset Password
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;
