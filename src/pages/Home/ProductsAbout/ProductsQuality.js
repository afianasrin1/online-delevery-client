import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/Images/product1.jpg";
const ProductsQuality = () => {
  return (
    <div className="my-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2">
          <img className="rounded-xl " src={product1} alt="" />
        </div>
        <div className="lg:w-1/2 py-4">
          <h5 className="text-pink-900 pb-4 text-4xl font-bold">
            our products
          </h5>

          <p className="md:text-justify lg:pt-4 text-xl">
            They have a wide range of gifts items like food, cakes, chocolates,
            bear, gift basket, eid gift, weddings cakes, sweets, chocolates,
            etc.
          </p>
          <div className="lg:w-1/2 py-4 pb-4 text-xl font-bold">
            <h5 className="text-pink-900 pb-4 text-xl font-bold">
              our products Link:
            </h5>
            <ul>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                <li>Chocolate and Ice Cream</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li> Diabetic food items</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li> Eid Gift Packages</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li> Biryani and Deshi Food</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li>Online Food Court</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li> Valentines Day Gift Packages</li>
              </Link>
              <Link to="/" className=" text-gray-900 hover:text-pink-900">
                {" "}
                <li> Gift Packages for BD</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsQuality;
