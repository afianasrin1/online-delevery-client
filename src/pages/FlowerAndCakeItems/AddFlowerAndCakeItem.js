import React from "react";
import toast from "react-hot-toast";

import useTitle from "../../hooks/Title";
const AddFlowerAndCakeItem = () => {
  useTitle("Add_flowerAndCakeItem");
  const addFlowerAndCakeItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const flowerAndCakeItemName = form.flowerAndCakeItemName.value;
    const flowerAndCakeItemPhotoUrl = form.flowerAndCakeItemPhotoUrl.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const flowerAndCakeItem = {
      title: flowerAndCakeItemName,
      img: flowerAndCakeItemPhotoUrl,
      price: price,
      rating: rating,
      details: description,
    };
    fetch(` http://localhost:5000/flowerAndCakeItems`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(flowerAndCakeItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success({
            position: "top-center",
            icon: "success",
            title: "flowerAndCakeItem Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="my-10  ">
      <form onSubmit={addFlowerAndCakeItem}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="flowerAndCakeItemName"
            id="flowerAndCakeItemName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="flowerAndCakeItemName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            FlowerAndCakeItem Name
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <textarea
            type="text"
            name="description"
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            flowerAndCakeItem Description
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="flowerAndCakeItemPhotoUrl"
            id="flowerAndCakeItemPhotoUrl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="recipePhotoUrl"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            FlowerAndCakeItem Photo Url
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              flowerAndCakeItem Price
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="rating"
              id="rating"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rating
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          FlowerAndCakeItem
        </button>
      </form>
    </div>
  );
};

export default AddFlowerAndCakeItem;
