import React from "react";

const FlowerAndCakeItemsCard = ({ flowerAndCakeItem }) => {
  const { _id, name, img, price, description, rating } = flowerAndCakeItem;
  return (
    <div className="card card-compact w-100 bg-base-100 shadow-xl border gap-6">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className=" text-2xl font-semibold">Price:${price}</p>
        <p className=" text-xl font-semibold">Details:${description}</p>
        {/* <div className="card-actions justify-end">
          <Link to={`/checkout/${id}`}>
            <button className="btn btn-primary">Order Book Now</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FlowerAndCakeItemsCard;
