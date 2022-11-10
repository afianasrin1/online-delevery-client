import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AOS from "aos";
import { HiArrowLongRight } from "react-icons/hi2";
const HomeFlowerAndCakeItems = () => {
  const [flowerAndCakeItems, setFlowerAndCakeItems] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/limitFlowerAndCakeItems")
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10">
        {flowerAndCakeItems.map((flowerAndCakeItem) => (
          <div key={flowerAndCakeItem._id}>
            <div data-aos="flip-right" className="bg-gray-100  h-full ">
              <PhotoProvider>
                <PhotoView src={flowerAndCakeItems.img}>
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
                    title="Click for details"
                    className="text-gray-900 text-xl text-center font-bold transition-all hover:text-red-500"
                  >
                    {flowerAndCakeItem.name}
                  </h1>
                </Link>
                <p className="text-gray-700 pt-4 text-justify ">
                  {flowerAndCakeItem.description.slice(0, 100)}...
                </p>
              </div>

              <div className="pt-6 pb-2 absolute bottom-0	w-full  ">
                <p className="uppercase px-4 border-t flex items-center justify-between border-gray-400 border-b py-2  text-black text-sm font-bold">
                  <span>Food |</span>{" "}
                  <Link
                    to={`/flowerAndCakeItem/${flowerAndCakeItem._id}`}
                    title="flowerAndCakeItem Details"
                    className="text-xl text-red-500 hover:text-red-600 transition-all  font-bold"
                  >
                    <HiArrowLongRight />
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

export default HomeFlowerAndCakeItems;
