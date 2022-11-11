import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ id }) => {
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/review/${id}`)
			.then(res => res.json())
			.then(result => {
				const reviewData = result.filter(data => data.reviewId === id);
				setReview(reviewData);
			});
	}, [review, id]);

	return (
		<div className=" 	">
			{review.length === 0 && (
				<h1 className="text-center text-red-500 pt-16">
					No Review Found for this flower !
				</h1>
			)}
			{review.length > 0 && (
				<div className="border border-gray-500 rounded ">
					<h1 className="text-center text-red-500 font-bold text-xl  pb-3">
						All Review is Here
					</h1>

					<div className="flex-col gap-4 flex">
						{review.map(rev => (
							<div
								className="bg-gray-400 p-1 text-gray-900 rounded-lg rounded-tr-none"
								key={rev._id}>
								<div
									title={rev.email}
									className="flex justify-between items-center border-b border-gray-500">
									<h1 className="text-semibold">{rev?.name}</h1>

									<img
										className="w-12 h-12   border-red-400  border-2 rounded-full"
										src={rev.userImg}
										alt=""
									/>
								</div>
								<div className="pt-2">
									<p>{rev.message}</p>
									<div className="flex pt-3 justify-between items-center">
										<h1 className="flex items-center ">
											Starts:{" "}
											<small className="ml-2 font-bold">{rev.star}</small>{" "}
											<small className="pt-1 text-red-500">
												{" "}
												<FaStar />
											</small>
										</h1>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Review;
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";
// import { FaStar } from "react-icons/fa";

// const Review = ({ id }) => {
//   const { user } = useContext(AuthContext);
//   const [review, setReview] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/ourReview?email=${user?.email}`)
//       .then((res) => res.json())
//       .then((result) => {
//         const reviewData = result.filter((data) => data.reviewId === id);
//         setReview(reviewData);
//       });
//   }, [review, id]);

//   return (
//     <div className="">
//       <div>
//         {review.length === 0 && (
//           <h1 className="text-center text-black-900 pt-16 pb-5">
//             Not Found flower&CakeItems Review
//           </h1>
//         )}
//         {review.length > 1 && (
//           <>
//             <h1 className="text-center text-violet-700 pb-3">
//               All Review is Here
//             </h1>

//             <div className="flex-col gap-4 flex">
//               {review.map((rev) => (
//                 <div
//                   className="bg-white p-1 text-gray-900 rounded-lg rounded-tr-none"
//                   key={rev._id}
//                 >
//                   <div
//                     title={rev.email}
//                     className="flex justify-between items-center border-b border-gray-500"
//                   >
//                     <h1 className="text-semibold">{rev.name}</h1>
//                     <img
//                       className="w-12 h-12 rounded-full"
//                       src={rev.userImg}
//                       alt=""
//                     />
//                   </div>
//                   <div className="pt-2">
//                     <p>{rev.message}</p>
//                     <h1 className="flex items-center pt-3">
//                       Starts:{" "}
//                       <small className="ml-2 font-bold">{rev.star}</small>{" "}
//                       <small className="pt-1 text-pink-900">
//                         {" "}
//                         <FaStar />
//                       </small>
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Review;
