import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Banner/Slider";
import HomeFlowerAndCakeItems from "../HomeFlowerAndCakeItems/HomeFlowerAndCakeItems";
import ProductsQuality from "../ProductsAbout/ProductsQuality";
import useTitle from "../../../hooks/Title";
const Home = () => {
  useTitle("Home");
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
