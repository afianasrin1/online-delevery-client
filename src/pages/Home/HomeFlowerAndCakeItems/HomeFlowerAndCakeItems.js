import React from "react";
import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
const HomeFlowerAndCakeItems = () => {
  return (
    <div className="mb-16 mt-28">
      <div className="flex  justify-between border-b border-gray-400 pb-5">
        <h1 className="text-4xl font-semibold">RECENT ADDED</h1>
        <Link
          to="/recipes"
          className="flex items-center bg-red-500 py-2 px-3 rounded-md hover:bg-red-600 text-white"
        >
          <span>View more</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeFlowerAndCakeItems;
