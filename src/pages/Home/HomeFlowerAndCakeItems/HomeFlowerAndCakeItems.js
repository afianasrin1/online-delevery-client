import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";

import { FaArrowAltCircleRight } from "react-icons/fa";
const HomeFlowerAndCakeItems = () => {
  const [flowerAndCakeItems, setFlowerAndCakeItems] = useState([]);
  useEffect(() => {
    fetch(
      " https://assignment-11-server-orcin.vercel.app/limitFlowerAndCakeItems"
    )
      .then((res) => res.json())
      .then((result) => {
        setFlowerAndCakeItems(result);
      });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-16 mt-28">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10">
        {flowerAndCakeItems.map((flowerAndCakeItem) => (
          <div key={flowerAndCakeItem._id}>
            <div data-aos="flip-up" className="bg-gray-100  h-full ">
              <PhotoProvider>
                <PhotoView src={flowerAndCakeItem.img}>
                  <img
                    className="border-b-2 md:h-[300px] w-full cursor-pointer border-gray-400"
                    src={flowerAndCakeItem.img}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="px-2 pb-16 pt-4">
                <Link to={`/flowerAndCakeItem/${flowerAndCakeItem._id}`}>
                  <h1
                    name="Click for details"
                    className="text-gray-900 text-xl text-center font-bold transition-all hover:text-pink-900"
                  >
                    {flowerAndCakeItem.name}
                  </h1>
                </Link>
                <p className="text-gray-700 pt-4 text-justify ">
                  {flowerAndCakeItem.details.slice(0, 100)}...
                </p>
              </div>

              <div className="pt-6 pb-2 absolute bottom-0	w-full  ">
                <p className=" px-4  flex items-center justify-between py-2  text-pink-900 text-sm font-bold">
                  <span>SingleItem</span>
                  <Link
                    to={`/flowerAndCakeItem/${flowerAndCakeItem._id}`}
                    name="flowerAndCakeItem Details"
                    className="text-xl text-pink-900 hover:text-pink-500 transition-all  font-bold"
                  >
                    <FaArrowAltCircleRight />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  justify-center  pb-5 pt-8">
        <h1 className="text-3xl font-semibold">More FlowerAndCakeItems</h1>
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
