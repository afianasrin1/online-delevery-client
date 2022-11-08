import React from "react";
import img1 from "../../../assets/sliderImage/img1.jpg";
import img2 from "../../../assets/sliderImage/img2.jpg";
import img3 from "../../../assets/sliderImage/img3.jpg";
import img4 from "../../../assets/sliderImage/img4.jpg";
import img5 from "../../../assets/sliderImage/img5.jpg";
import img6 from "../../../assets/sliderImage/img6.jpg";
import img7 from "../../../assets/sliderImage/img7.jpg";
import img8 from "../../../assets/sliderImage/img8.jpg";
import SliderItems from "./SliderItems";

const Slider = () => {
  const sliderData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 7,
    },
    {
      image: img7,
      prev: 6,
      id: 7,
      next: 8,
    },
    {
      image: img8,
      prev: 7,
      id: 8,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full py-10 ">
      {sliderData.map((slider) => (
        <SliderItems key={slider.id} slider={slider} />
      ))}
    </div>
  );
};

export default Slider;
