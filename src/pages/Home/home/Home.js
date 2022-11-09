import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Banner/Slider";
import HomeFlowerAndCakeItems from "../HomeFlowerAndCakeItems/HomeFlowerAndCakeItems";
import ProductsQuality from "../ProductsAbout/ProductsQuality";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <ProductsQuality />
      <HomeFlowerAndCakeItems />
    </div>
  );
};

export default Home;
