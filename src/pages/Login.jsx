import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

const Login = () => {
  const { userLogin, userGoogleSignIn } = useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold">Login now!</h1>
      </div>
      <div className="card p-6 bg-base-100 w-full mt-6 max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handelSubmit} className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white rounded-full bg-[#8529CD] hover:bg-[#6A1D9A] hover:scale-105 transition-all">
              Login
            </button>
          </div>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-[#8529CD] font-medium">
              SignUp
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
        <div>
          <button
            onClick={userGoogleSignIn}
            className="flex items-center justify-center w-full  border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white hover:bg-gray-100"
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
