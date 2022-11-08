import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/Images/notFound.jpg";
const ErrorPage = () => {
  return (
    <div className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={notFound} alt="" />
        <div className="max-w-md text-center">
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-white-200 text-gray-900"
          >
            <button className="btn btn-error hover:btn-success">
              {" "}
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
