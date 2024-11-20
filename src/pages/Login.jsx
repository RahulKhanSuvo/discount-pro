import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { userLogin, userGoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    userLogin(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setError("Invalid email or password.");
      });
  };

  const handleGoogleLogin = () => {
    userGoogleSignIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setError("Google login failed.");
      });
  };

  const handleRegisterBtn = () => {
    navigate("/register", { state: location.state });
  };
  const handelForgetPassword = () => {
    navigate("/forget-password", { state: { email } });
  };
  return (
    <div className="min-h-[calc(100vh-197px)] bg-[#F8F8F8] flex flex-col  justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Login now!
        </h1>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
        }}
        className="card rounded-sm p-6 bg-base-100 w-full mt-6 max-w-lg shrink-0 "
      >
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input rounded-sm input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input rounded-sm input-bordered"
              required
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 cursor-pointer text-xl bottom-12"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </p>
            <label className="label">
              <a
                onClick={handelForgetPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn text-white rounded-sm bg-[#8529CD] hover:bg-[#6A1D9A] hover:scale-105 transition-all">
              Login
            </button>
          </div>
          <p className="text-center mt-2">
            Do not have an account?{" "}
            <button
              onClick={handleRegisterBtn}
              className="text-[#8529CD] font-medium"
            >
              SignUp
            </button>
          </p>
          <div className="divider">OR</div>
        </form>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 hover:scale-105 rounded-sm px-4 py-2 shadow-sm bg-white hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" />
            <span className="text-gray-600 font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
