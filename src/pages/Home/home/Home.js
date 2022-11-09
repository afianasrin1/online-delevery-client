import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Banner/Slider";
import HomeFlowerAndCakeItems from "../HomeFlowerAndCakeItems/HomeFlowerAndCakeItems";
import ProductsQuality from "../ProductsAbout/ProductsQuality";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeFlowerAndCakeItems />
      <AboutUs />
      <ProductsQuality />
    </div>
  );
};

export default Home;
