import React from "react";
import photo from "../../../assets/Images/photo.avif";
const AboutUs = () => {
  return (
    <div className="my-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2">
          <img className="rounded-xl " src={photo} alt="" />
        </div>
        <div className="lg:w-1/2 py-4">
          <h5 className="text-red-500 pb-4 font-bold">WHO WE ARE</h5>
          <h2 className="lg:text-5xl text-2xl font-semibold pb-7">
            10+ flavors in one <br className="hidden lg:block " /> place.
          </h2>
          <p className="md:text-justify lg:pt-4 text-xl">
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac
            sed primis convallis fames taciti dolor tempor. Faucibus morbi
            posuere sagittis turpis class vivamus penatibus ornare mollis donec
            scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
