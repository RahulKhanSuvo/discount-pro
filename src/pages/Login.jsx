const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold">Login now!</h1>
      </div>
      <div className="card bg-base-100 w-full mt-6 max-w-lg shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
            <button className="btn text-white rounded-full bg-[#8529CD]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
