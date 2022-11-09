import React from "react";
import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
const HomeFlowerAndCakeItems = () => {
  return (
    <div className="mb-16 mt-28">
      <div className="flex  justify-between border-b border-gray-400 pb-5">
        <h1 className="text-4xl font-semibold">
          Recent Added FlowerAndCakeItems
        </h1>
        <Link
          to="/flowerAndCakeItems"
          className="flex items-center bg-pink-900 py-2 px-3 rounded-md hover:bg-pink-500 text-white"
        >
          <span>See All</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeFlowerAndCakeItems;
