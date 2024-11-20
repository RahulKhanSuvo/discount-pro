import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const { userRegister, updateUserProfile, userGoogleSignIn, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    setError("");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    if (!hasMinLength) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!hasUppercase) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must contain at least one lowercase letter.");
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    userRegister(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setLoading(false);
            navigate("/");
          })
          .catch(() => {
            setError("Failed to update user profile.");
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSign = () => {
    userGoogleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Google sign-in failed.");
      });
  };

  return (
    <section className="min-h-[calc(100vh-197px)] pt-10 bg-[#F8F8F8]">
      {" "}
      <div className=" flex flex-col justify-center items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            {" "}
            Register now!
          </h1>
        </div>
        <div
          style={{
            boxShadow: "5px 5px 3px rgba(243, 243, 243, 1)",
          }}
          className="card rounded-sm p-6 bg-white w-full mt-6 max-w-lg shrink-0 shadow-md "
        >
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                name="photo"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input  rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                className="input rounded-sm input-bordered"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer text-xl top-12"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
              </p>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white rounded-sm bg-[#8529CD] hover:bg-[#6A1D9A] hover:scale-105 transition-all">
                Register
              </button>
            </div>
            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8529CD] font-medium">
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <div>
            <button
              onClick={handleGoogleSign}
              className="flex items-center justify-center w-full border border-gray-300 rounded-sm hover:scale-105 px-4 py-2 shadow-sm bg-white transition-all hover:bg-gray-100"
            >
              <FcGoogle className="mr-2" />
              <span className="text-gray-600 font-medium">
                Login with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
