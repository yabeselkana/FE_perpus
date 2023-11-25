import React from "react";
import { Navbar } from "../componets/Navbar/Navbar";
import { Carousel } from "../componets/Carousel/Carousel";
import Foot from "../componets/Foot/Foot";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Foot />
    </div>
  );
};

export default Home;
