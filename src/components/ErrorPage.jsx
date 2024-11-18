import { Link, useRouteError } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = error?.statusText || error?.message || "Page Not Found";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="text-2xl mt-4 text-gray-800">Something went wrong...</p>
      <p className="text-lg text-gray-600 mt-2">{errorMessage}</p>
      <Link
        to="/"
        className="btn bg-[#8529CD] text-white mt-6 hover:bg-[#6A1D9A] rounded-full flex items-center gap-2"
      >
        <AiOutlineHome className="text-xl" />
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
