import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

import navbar from "../../../assets/Images/navbar.jpg";
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div className="bg-gray-900">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link
							to="/"
							aria-label="Get Pretty Flower&Cake"
							title="Get Pretty Flower&Cake"
							className="inline-flex items-center mr-8">
							<img className="w-10  rounded-full" src={navbar} alt="" />
							<span className="ml-2 hidden sm:block text-xl font-bold tracking-wide text-gray-100 uppercase">
								Get Pretty Flower&Cake
							</span>
							<span
								title="Learning Web Development"
								className="ml-2 sm:hidden text-xl font-bold tracking-wide text-gray-100 uppercase">
								g.p Flower&Cake
							</span>
						</Link>
						<ul className="flex items-center hidden space-x-8 lg:flex">
							<li>
								<Link
									to="/home"
									aria-label="Home"
									title="Home"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/flowerAndCakeItems"
									aria-label="FlowerAndCakeItems "
									title="FlowerAndCakeItems "
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
									Items
								</Link>
							</li>
							{user?.email ? (
								<>
									<li>
										<Link
											to="/addFlowerAndCakeItem"
											aria-label="AddFlowerAndCakeItem"
											title="AddFlowerAndCakeItem"
											className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
											Add Item
										</Link>
									</li>
									<li>
										<Link
											to="/myReview"
											aria-label="Our Review"
											title="Our Review"
											className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
											My Review
										</Link>
									</li>
								</>
							) : undefined}

							<li>
								<Link
									to="/blog"
									aria-label="Blog"
									title="Blog"
									className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex items-center justify-between gap-5">
						<>
							{user?.uid ? (
								<div className="text-white flex items-center gap-3">
									<span className="hidden md:block">{user?.displayName}</span>
									<button
										onClick={handleLogOut}
										className="btn hidden sm:block btn-outline btn-success">
										Logout
									</button>
								</div>
							) : (
								<div className="text-white">
									<Link to="/login"> Login </Link>
									<Link to="/signUp"> SignUp </Link>
								</div>
							)}
						</>
						<div className="cursor-pointer w-10">
							{user?.uid ? (
								<Link to="/profile">
									<img
										title={user.displayName}
										className="w-10 h-10  rounded-full"
										src={user?.photoURL}
										alt=""
									/>
								</Link>
							) : (
								<div title="No user found">
									<Link to="/profile">
										<FaUser className="text-white" />
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="lg:hidden z-50">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link
												to="/"
												aria-label="   Get Pretty Flower&Cake"
												title="  Get Pretty Flower&Cake"
												className="inline-flex items-center">
												<img
													className="w-10 rounded-full"
													src={navbar}
													alt=""
												/>
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													Get Pretty Flower&Cake
												</span>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<Link
													to="/home"
													aria-label="Home"
													title="Home"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-500">
													Home
												</Link>
											</li>
											<li>
												<Link
													to="/flowerAndCakeItems"
													aria-label="FlowerAndCakeItems"
													title="FlowerAndCakeItems"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-500">
													FlowerAndCakeItems
												</Link>
											</li>
											{user?.email ? (
												<>
													<li>
														<Link
															to="/addFlowerAndCakeItem"
															aria-label="AddFlowerAndCakeItem"
															title="AddFlowerAndCakeItem"
															className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
															Add Flower&CakeItem
														</Link>
													</li>
													<li>
														<Link
															to="/myReview"
															aria-label=" Our Review"
															title=" Our Review"
															className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-pink-500">
															Our Review
														</Link>
													</li>
												</>
											) : undefined}
											<li>
												<Link
													to="/aboutUs"
													aria-label=" AboutUs"
													title=" AboutUs"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-500">
													AboutUs
												</Link>
											</li>
											<li>
												<Link
													to="/blog"
													aria-label="Blog"
													title="Blog"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-500">
													Blog
												</Link>
											</li>
										</ul>
										<div>
											<>
												{user?.uid ? (
													<>
														<span>{user?.displayName}</span>
														<button
															onClick={handleLogOut}
															className="btn btn-outline btn-primary">
															Logout
														</button>
													</>
												) : (
													<>
														<Link to="/login"> Login </Link>
														<Link to="/signUp"> SignUp </Link>
													</>
												)}
											</>
											<Link to="/profile">
												{user?.photoURL ? (
													<img
														style={{ height: "30px" }}
														src={user?.photoURL}
														alt=""
													/>
												) : (
													<FaUser className="text-white"></FaUser>
												)}
											</Link>
										</div>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
