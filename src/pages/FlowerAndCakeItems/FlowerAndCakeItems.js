import React, { useEffect, useState } from "react";

import FlowerAndCakeItemsCard from "./FlowerAndCakeItemsCard";

const FlowerAndCakeItems = () => {
  const [flowerAndCakeItems, setFlowerAndCakeItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/flowerAndCakeItems")
      .then((res) => res.json())
      .then((data) => setFlowerAndCakeItems(data));
  }, []);
  return (
    <div>
      <div className="text-xl mb-4">
        <h2 className="text-3xl text-center pt-5 text-pink-900 font-semibold ">
          Our flower And Cake Items
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {flowerAndCakeItems.map((flowerAndCakeItem) => (
          <FlowerAndCakeItemsCard
            key={flowerAndCakeItem._id}
            flowerAndCakeItem={flowerAndCakeItem}
          ></FlowerAndCakeItemsCard>
        ))}
      </div>
    </div>
  );
};

export default FlowerAndCakeItems;
