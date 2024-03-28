import React from "react";
import Image from "next/image";
import hero from "./assets/hero1.png";
// import herok from "./assets/1094546947preview.mp4";
// import herok from "./assets/1097384643preview.mp4";
import herok from "./assets/hero.jpg";
import "./style.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container h-[650px] max-lg:h-full">
        {/* <video
          controls
          preload="none"
          autoPlay
          loop
          muted
          className="hero-video"
        >
          <source src={herok} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="hero- flex justify-center items-center gap-0 py-40 h-full ">
          <div className="left-description w-[100%] mx-auto">
            {/* <span className="engage text-[#8AAAE5] text-lg font-bold mb-4">
              ENGAGED WITH STAFFING
            </span> */}
            <h1 className="text-[102px] max-sm:text-[50px] max-sm:p-1 text-center text-[#000] font-bold leading-[120%] mt6">
              Welcome to Hiring Tech
            </h1>
            {/* <p className="text-white font-medium text-[18px] mt-5">
              By way of us you can achieve what you want.
            </p> */}
            {/* <div className="mt-8">
              <button className="px-8 py-3 hover:bg-[#8AAAE5] bg-[#00246B] text-white hover:text-black rounded-3xl  ">
                Learn more
              </button>
            </div> */}
          </div>
          <div className="right-desc">
            {/* <Image src={hero} width={600} alt="hero" /> */}
          </div>
        </div>
      </div>

      {/* div. */}
    </>
  );
};

export default Hero;
