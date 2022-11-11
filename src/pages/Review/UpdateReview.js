import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateReview = () => {
	const navigate = useNavigate();
	const review = useLoaderData();
	const handleUpdateReview = async e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = review.email;
		const star = form.star.value;
		const message = form.message.value;
		const userImg = form.userImg.value;

		const updateReview = {
			name,
			message,
			star,
			email,
			userImg,
		};
		fetch(`http://localhost:5000/review/${review?._id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateReview),
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					toast.success("Review Update Successfully");
					navigate("/myReview");
				}
			});
	};

	return (
		<div>
			<div className=" w-3/4 mx-auto my-16  shadow-2xl ">
				<form onSubmit={handleUpdateReview}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							name="name"
							required
							defaultValue={review?.name}
							type="text"
							placeholder="Name"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							name="email"
							required
							defaultValue={review?.email}
							type="email"
							placeholder="email"
							className="input input-bordered"
							readOnly
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Review message</span>
						</label>
						<textarea
							name="message"
							required
							defaultValue={review?.message}
							type="text"
							placeholder="review message"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text"> User PhotoUrl</span>
						</label>
						<input
							name="userImg"
							required
							defaultValue={review?.userImg}
							type="text"
							placeholder="Photo url"
							className="input input-bordered"
						/>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Stars</span>
						</label>
						<input
							name="star"
							required
							defaultValue={review?.star}
							type="text"
							placeholder="password"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateReview;
