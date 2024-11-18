import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { toast } from "react-toastify";

const Register = () => {
  const { userRegister, updateUserProfile, userGoogleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // Reset error message
    setError("");

    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (!hasMinLength) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    userRegister(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful!");

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("User profile updated successfully");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            toast.error("Failed to update user profile.");
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setError(error.message);
        toast.error("Registration failed. Please try again.");
      });
  };
  const handleGoogleSign = () => {
    userGoogleSignIn()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google sign-in failed.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold"> Register now!</h1>
      </div>
      <div className="card p-6 bg-base-100 w-full mt-6 max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white rounded-full bg-[#8529CD] hover:bg-[#6A1D9A] hover:scale-105 transition-all">
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
            className="flex items-center justify-center w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" />
            <span className="text-gray-600 font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
