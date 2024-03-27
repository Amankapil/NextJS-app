import React from "react";
import herok from "./assets/1106206051preview.mp4";
import "./contactstyle.css";

const Contactf = () => {
  return (
    <>
      <div className="hero-container">
        <video
          controls
          preload="true"
          autoPlay
          loop
          muted
          className="hero-video"
        >
          <source src={herok} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero- flex justify-center items-center gap-0 py-40 h-full ">
          <div className="left-description w-[50%]">
            {/* <span className="engage text-[#8AAAE5] text-lg font-bold mb-4">
              ENGAGED WITH STAFFING
            </span> */}
            <h1 className="text-[55px] text-[#fff] font-bold leading-[120%] mt-6 text-center">
              We'd love to hear from you. Contact us using the form below.
            </h1>
            {/* <p className="text-white font-medium text-[18px] mt-5">
              By way of us you can achieve what you want.
            </p>
            <div className="mt-8">
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
    </>
  );
};

export default Contactf;
