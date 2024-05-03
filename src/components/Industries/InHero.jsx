import React from "react";
import "./style.scss";
import Image from "next/image";
import img from "./assets/Frame.png";

const InHero = () => {
  return (
    <>
      <div className="industriesweser">
        <div className="w-full h-[635px] max-w7xl mxauto industrie ">
          <div className="w-4px] text-400 text-white  max-w-7xl mx-auto  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center items-center h-[700px]">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
              <h1 className="text-400 text-white text-[48px]  font-bold  leading-[108%] max-md:text-[50px] max-md:leading-[54px]">
              Business Covered.
              </h1>
              <p className="text-400 text-white text-[32px]  font-bold max-md:text-[50px] max-md:leading-[54px]">
                We serve businesses across a range of industries, delivering
                designs that get results.
              </p>
              <Image src={img} alt="industruies" />
            </div>
          </div>
        </div>
      </div>
      div
    </>
  );
};

export default InHero;
