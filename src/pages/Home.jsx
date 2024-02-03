import React from "react";
import { Navbar } from "../componets/Navbar/Navbar";
import { Carousel } from "../componets/Carousel/Carousel";
import Foot from "../componets/Foot/Foot";
import NavLogin from "../componets/NavLogin/NavLogin";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* <NavLogin /> */}
      <Carousel />
      <Foot />
    </div>
  );
};

export default Home;
