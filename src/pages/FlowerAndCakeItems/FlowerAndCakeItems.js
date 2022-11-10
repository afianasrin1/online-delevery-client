import React, { useEffect } from "react";
import AOS from "aos";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/Title";
const FlowerAndCakeItems = () => {
  const flowerAndCakeItems = useLoaderData();
  useTitle("All_FlowerAndCakeItems");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-10 mb-10">
        {flowerAndCakeItems.map((flowerAndCakeItem) => (
          <div key={flowerAndCakeItem._id}>
            <div data-aos="flip-left" className="bg-gray-100 h-full ">
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
                <Link to={`/recipe/${flowerAndCakeItem._id}`}>
                  <h1
                    title="Click for Food details"
                    className="text-gray-900 text-sm sm:text-xl text-center font-bold transition-all hover:text-red-500"
                  >
                    {flowerAndCakeItems.name}
                  </h1>
                </Link>
                <p className="text-gray-700 pt-4 text-justify ">
                  {flowerAndCakeItem.details.slice(0, 100)}...
                </p>
              </div>
              <div className="pt-6 pb-2  absolute bottom-0 w-full">
                <p className=" px-4  flex items-center justify-between py-2  text-pink-900 text-sm font-bold">
                  <span>Flower&Cake</span>
                  <Link
                    to={`/flowerAndCakeItem/${flowerAndCakeItem._id}`}
                    name="flowerAndCakeItem Details"
                    className="text-xl text-pink-900 hover:text-pink-600 transition-all  font-bold"
                  >
                    {" "}
                    <FaArrowAltCircleRight />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerAndCakeItems;
