import React from "react";
import "./SliderItems.css";

const SliderItems = ({ slider }) => {
  const { image, id, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-between transform  -translate-y-1/2  left-24 right-24 top-1/4">
        <h2 className="text-3xl text-white w-1/2">
          Reasonably priced for
          <br />
          flower and cake delivery
        </h2>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2  right-5 left-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItems;
