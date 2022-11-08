import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Banner/Slider";
import HomeFlowerAndCakeItems from "../HomeFlowerAndCakeItems/HomeFlowerAndCakeItems";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <HomeFlowerAndCakeItems />
    </div>
  );
};

export default Home;
