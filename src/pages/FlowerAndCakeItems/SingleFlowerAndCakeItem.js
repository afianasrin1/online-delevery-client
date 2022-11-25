import React, { useContext, useEffect, useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/Title";
import toast from "react-hot-toast";
import Review from "../Review/Review";
const SingleFlowerAndCakeItem = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(false);
  const { id } = useParams();
  const [flowerAndCakeItem, setFlowerAndCakeItem] = useState({});
  const { img, title, price, rating, details, _id } = flowerAndCakeItem;

  useEffect(() => {
    fetch(
      ` https://assignment-11-server-orcin.vercel.app/flowerAndCakeItems/${id}`
    )
      .then((res) => res.json())
      .then((result) => setFlowerAndCakeItem(result));
  }, [id]);
  useTitle("flowerAndCakeItem_Details");
  // const reviewDate = new Date();
  // date format
  function formatDate(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime =
      hours + ":" + minutes + " " + ampm + " " + dd + "/" + mm + "/" + yyyy;
    return strTime;
  }

  const reviewDate = formatDate(new Date());
  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const userImg = user.photoURL;
    const email = user.email;
    const name = form.name.value;
    const star = form.star.value;
    const review = {
      message,
      star,
      email,
      title,
      userImg,
      name,
      flowerAndCakeItemImg: img,
      reviewId: _id,
      reviewDate,
    };
    fetch(" https://assignment-11-server-orcin.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("your review is submitted !");
          form.reset();
        }
      });
  };
  return (
    <div className="my-8 lg:flex gap-8">
      <div className="bg-gray-200 mx-auto lg:w-3/4 md:1/2 sm:w-3/4 ">
        <img className="max-h-[500px] w-full" src={img} alt="" />
        <div className="pt-4 border-t-2 px-4 pb-4 border-gray-500">
          <div className="text-gray-800">
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
          </div>
          <h1 className="text-gray-900 pb-4 sm:text-xl text-sm text-center font-bold transition-all hover:text-pink-900">
            {title}
          </h1>
          <p className="text-gray-800 text-justify">{details}</p>
          <div className="mt-3 flex justify-end">
            <Link
              name="See All FlowerAndCakeItem."
              to="/flowerAndCakeItems"
              className="text-pink-900 text-2xl"
            >
              <BsBoxArrowRight />
            </Link>
          </div>
        </div>
        <div className="px-4 lg:block hidden mt-3">
          <div
            name="Review Here please click now"
            className="cursor-pointer text-pink-900 hover:text-pink-500 font-bold"
            onClick={() => setReview(!review)}
          >
            {review ? undefined : (
              <button className="mb-3 inline-block ">Add Review</button>
            )}
          </div>
          <div>
            {" "}
            {review && (
              <>
                {user?.email ? (
                  <form onSubmit={handleReview}>
                    <div className="flex justify-between items-center pr-6">
                      <h1 className="text-Pink-900 font-semibold pb-3">
                        Please Give Review
                      </h1>
                      <span
                        title="Hide from"
                        className="cursor-pointer"
                        onClick={() => setReview(!review)}
                      >
                        <FaTimes />
                      </span>
                    </div>
                    <textarea
                      className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
                      name="message"
                      required
                      id=""
                      placeholder="Your Review......"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <input
                      name="star"
                      required
                      type="number"
                      className="w-full px-4 py-2 md:mb-0  mt-1 outline-none focus:border-pink-900 border-2 bg-white"
                      placeholder="Give rating"
                    />
                    <div className="md:flex py-3 gap-8 ">
                      <input
                        name="name"
                        defaultValue={user.displayName}
                        required
                        type="text"
                        className="w-full px-4 py-2 md:mb-0 mb-3 outline-none focus:border-pink-900 border-2 bg-white"
                        placeholder="Your Name"
                      />
                      <input
                        defaultValue={user.email}
                        readOnly
                        required
                        type="text"
                        className="w-full px-4 py-2 outline-none focus:border-pink-900 border-2 bg-white"
                        placeholder="Your Email"
                      />
                    </div>
                    <input
                      className="cursor-pointer bg-pink-900 py-2 px-6 inline-block  mb-5 mt-2 rounded hover:bg-gray-900 transition-all text-white"
                      type="submit"
                      value="Post Review"
                    />
                  </form>
                ) : (
                  <div className="pb-3 font-bold text-gray-800">
                    if you want to give a review please
                    <Link className="text-pink-900 ml-2" to="/login">
                      login Now
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 mx-auto md:1/2 sm:w-3/4">
        {" "}
        <Review id={_id} />
      </div>
      <div className="px-4 lg:hidden block mt-8">
        <div
          className="text-gray-200 text-center font-bold"
          onClick={() => setReview(!review)}
        >
          {review ? undefined : (
            <button className="mb-3  inline-block ">Add Review</button>
          )}
        </div>
        <div>
          {" "}
          {review && (
            <>
              {user?.email ? (
                <form onSubmit={handleReview}>
                  <div className="flex justify-between items-center pr-6">
                    <h1 className="text-pink-900  font-semibold pb-3">
                      Please Give Review
                    </h1>
                    <span
                      title="Hide from"
                      className="cursor-pointer"
                      onClick={() => setReview(!review)}
                    >
                      <FaTimes />
                    </span>
                  </div>
                  <textarea
                    className="w-full px-4 py-2 outline-none focus:border-pink-900 border-2 bg-white"
                    name="message"
                    required
                    id=""
                    placeholder="Your Review......"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <input
                    name="star"
                    required
                    type="number"
                    className="w-full px-4 py-2 md:mb-0  mt-1 outline-none focus:border-pink-900 border-2 bg-white"
                    placeholder="Give rating"
                  />
                  <div className="md:flex py-3 gap-8 ">
                    <input
                      name="name"
                      defaultValue={user.displayName}
                      required
                      type="text"
                      className="w-full px-4  py-2 md:mb-0 mb-3 outline-none focus:border-pink-900 border-2 bg-white"
                      placeholder="Your Name"
                    />
                    <input
                      defaultValue={user.email}
                      readOnly
                      required
                      type="text"
                      className="w-full px-4 py-2 outline-none focus:border-pink-900 border-2 bg-white"
                      placeholder="Your Email"
                    />
                  </div>
                  <input
                    className="cursor-pointer bg-pink-900 py-2 px-6 inline-block  mb-5 mt-2 rounded hover:bg-gray-900 transition-all text-white"
                    type="submit"
                    value="Post Review"
                  />
                </form>
              ) : (
                <div className="pb-3 font-bold text-gray-800">
                  if you want to give a review Please
                  <Link className="text-pink-900 ml-2" to="/login">
                    login Now
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleFlowerAndCakeItem;
