import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../assets/Images/photo.avif";
import ProductsQuality from "../ProductsAbout/ProductsQuality";
const AboutUs = () => {
  return (
    <div className="my-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 py-4">
          <h5 className="text-pink-900 pb-4 text-4xl font-bold">About Us</h5>
          {/* <h2 className="lg:text-5xl text-2xl font-semibold pb-7">
            10+ flavors in one <br className="hidden lg:block " /> place.
          </h2> */}
          <p className="md:text-justify lg:pt-4 text-xl">
            get pretty gift is very leading online gift stores in Bangladesh. It
            has been doing this business providing gift delivery service in
            Bangladesh since 2019. They have customers worldwide. They have huge
            variety of gifts iten that you can send your friends and families in
            Bangladesh. You can place an order from anywhere in the world. They
            offer a hand to hand delivery and have many types of regular and
            festival gift items.
          </p>
          <br />
          <h5 className="text-blue-900 pb-4 text-2xl font-bold">
            Special features:
          </h5>
          <p className="md:text-justify lg:pt-4 text-xl">
            Anywhere Deliver in the Bangladesh,
            <br /> Free delivery for Dhaka city,
            <br />
            Deliver 7 days a week Reliable Market lowest price Track checking
            online!
            <br /> Payment: Visa, Master, Amex, Paypal, bKash.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="rounded-xl " src={photo} alt="" />
        </div>
      </div>
      <Link to="/productQuality">
        <button className=" btn btn-primary hover:btn-success">
          product Information
        </button>
      </Link>
    </div>
  );
};

export default AboutUs;
