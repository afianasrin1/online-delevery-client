import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ id }) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((result) => {
        const reviewData = result.filter((data) => data.reviewId === id);
        setReview(reviewData);
      });
  }, [review, id]);

  return (
    <div className="">
      <div>
        {review.length === 0 && (
          <h1 className="text-center text-pink-900 pt-16">
            Not Found flower&CakeItems Review
          </h1>
        )}
        {review.length > 0 && (
          <>
            <h1 className="text-center text-pink-900  pb-3">
              All Review is Here
            </h1>

            <div className="flex-col gap-4 flex">
              {review.map((rev) => (
                <div
                  className="bg-white p-1 text-gray-900 rounded-lg rounded-tr-none"
                  key={rev._id}
                >
                  <div
                    title={rev.email}
                    className="flex justify-between items-center border-b border-gray-500"
                  >
                    <h1 className="text-semibold">{rev.name}</h1>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={rev.userImg}
                      alt=""
                    />
                  </div>
                  <div className="pt-2">
                    <p>{rev.message}</p>
                    <h1 className="flex items-center pt-3">
                      Starts:{" "}
                      <small className="ml-2 font-bold">{rev.star}</small>{" "}
                      <small className="pt-1 text-pink-900">
                        {" "}
                        <FaStar />
                      </small>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
