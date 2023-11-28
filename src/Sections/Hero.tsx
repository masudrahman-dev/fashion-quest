import Image from "next/image";
import React from "react";

import img1 from "../assets/images/Iphone 14 pro 1-1.png";
const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className=" mt-12 flex flex-col lg:flex-row  justify-between items-center">
        <div className="text-center mb-8">
          <h1 className="text-5xl mb-3">IPhone 14 Pro</h1>
          <p>Created to change everything for the better. For everyone</p>
        </div>
        <Image width={500} src={img1} alt={""}></Image>
      </div>
    </section>
  );
};

export default Hero;
