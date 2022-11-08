import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:w-4/5 px-3 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
